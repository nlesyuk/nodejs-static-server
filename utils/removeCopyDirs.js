const { copyDir, removeDir } = require('./index.js')
const path = require('path')

function delay(ms) {
  return new Promise((res, rej) => {
    setTimeout(() => res('1'), ms)
  })
}

async function main() {
  // RM
  console.log('REMOVE')
  const buildFolder = path.join(__dirname, '../server-bucket/build')
  await removeDir(buildFolder)

  await delay(1000);

  // CP
  console.log('COPY')
  const srcBuild = path.join(__dirname, '../../toto-frontend/build')
  const destBuild = path.join(__dirname, '../server-bucket/build')
  copyDir(srcBuild, destBuild, (e) => {
    console.log(e)
  })

}

main()
