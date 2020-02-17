import request from '@/utils/request'

export function login(username, password) {
  let params = new URLSearchParams()
  params.append("username",username)
  params.append("password",password)
  return request({
    url: '/members/login',
    method: 'post',
    data: params
  })
}

export function getUserInfo(token) {
  return request({
    url: `/members/${token}`,
    method: 'get'
  })
}

export function logout(token) {
  let params = new URLSearchParams()
  params.append("token", token)
  return request({
    url: '/members/logout',
    method: 'post',
    data: params
  })
}