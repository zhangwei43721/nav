import axios from 'axios'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const token = process.env['github_access_token']

const res = await axios.get(
  'https://api.github.com/repos/xjh22222228/nav/forks?page=3',
  {
    headers: {
      Authorization: `token ${token}`,
    },
  }
)
const data = res.data

let avatars = []
try {
  avatars = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), 'avatar.json')).toString()
  )
} catch {}

for (let i = 0; i < data.length; i++) {
  const item = data[i]
  const name = item.owner.login
  try {
    const user = await axios.get(`https://api.github.com/users/${name}`, {
      headers: {
        Authorization: `token ${token}`,
      },
    })
    console.log(user.data.avatar_url)
    avatars.push(user.data.avatar_url)
  } catch (error) {
    console.log(error.message)
  }
}

fs.writeFileSync('avatar.json', JSON.stringify(avatars, null, 2))
