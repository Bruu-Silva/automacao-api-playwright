import { test, expect } from '@playwright/test'
import { UsersAPI } from '../../api/UsersApi'

test.beforeEach(async ({}, testInfo) => {
  testInfo.annotations.push(
    { type: 'owner', description: 'Christopher' },
    { type: 'severity', description: 'critical' },
    { type: 'story', description: 'REQRES-1234 - Criação de usuários' },
    { type: 'feature', description: 'Users API' },
  )
})

test(
  'CT05 - deve retornar um usuário existente com status 200',
  { tag: ['@high', '@get', '@users'] },
  async ({ request }) => {
    const userApi = new UsersAPI(request)
    const response = await userApi.getUserById(6)

    expect(response.status()).toBe(200)
    const body = await response.json()
    expect(body.data).toMatchObject({ id: 6, first_name: 'Tracey' })

    console.log(body.data)
  },
)

test(
  'CT06 - deve retornar 404 para usuário inexistente',
  { tag: ['@high', '@get', '@users'] },
  async ({ request }) => {
    const userApi = new UsersAPI(request)
    const response = await userApi.getUserById(999)

    expect(response.status()).toBe(404)
  },
)

test(
  'CT07 - validação de contrato na estrutura de retorno json',
  { tag: ['@medium', '@get', '@users'] },
  async ({ request }) => {
    const response = await request.get('api/users/2')
    const body = await response.json()

    expect(response.status()).toBe(200)

    expect(body.data).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        email: expect.any(String),
        first_name: expect.any(String),
        last_name: expect.any(String),
        avatar: expect.any(String),
      }),
    )
  },
)
