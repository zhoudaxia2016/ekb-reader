import {Button} from 'antd'
import React, {useCallback, useRef} from 'react'
import {backupZip, backupConfig} from './config'
import iddb from '~/storage/iddb'
import JSZip from 'jszip'
import {parseFileName} from '~/utils/utils'
import ProgressModal from '~/components/ProgressModal'
import {saveAs} from 'file-saver'
import {bookUserInfoStorage, shelfStorage} from '~/storage/localStorage'

export function getExportConfig(booksInfo) {
  const bookUserInfo = bookUserInfoStorage.getAll()
  const shelfs = shelfStorage.getAll()
  const config = Object.keys(bookUserInfo).map(id => {
    const info = booksInfo.find(_ => _[0] === Number(id))
    if (!info) {
      return
    }
    const userInfo = bookUserInfo[id]
    if (userInfo.shelf) {
      const shelf = shelfs.find(_ => _.id === userInfo.shelf)
      userInfo.shelf = shelf.name
    }
    return {
      md5: info[1].md5,
      config: userInfo,
    }
  }).filter(_ => _)
  return JSON.stringify({bookConfig: config, shelfs: shelfs.map(_ => _.name)})
}

export default function Backup() {
  const refProgress = useRef<ProgressModal>()
  const handleBackup = useCallback(async () => {
    refProgress.current.open()
    const books = await iddb.getAllBookData()
    const booksInfo = await iddb.getAllBookInfo()
    const zip = new JSZip()
    books.forEach(([id, data]) => {
      const info = booksInfo.find(_ => _[0] === id)
      const {name} = info[1]
      const {ext = ''} = parseFileName(name)
      if (!ext) {
        return
      }
      zip.file(`${name}.${ext}`, data)
    })
    const config = getExportConfig(booksInfo)
    zip.file(backupConfig, config)
    zip.generateAsync({type: 'blob'}, function(metadata) {
      refProgress.current.updatePercent(metadata.percent)
    }).then(function(content) {
      refProgress.current.close()
      saveAs(content, backupZip)
    })
  }, [])

  return (
    <>
      <ProgressModal title="正在生成备份..." ref={refProgress}/>
      <Button type="text" onClick={handleBackup}>备份</Button>
    </>
  )
}
