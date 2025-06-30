import { test, expect } from '@playwright/test'
import { UsersAPI } from '../../api/UsersApi'

test.describe('Post - criando novo usuário', async () => {
  test(
    'CT01 - deve criar um novo usuário com status 201',
    { tag: ['@high', '@post', '@users'] },
    async ({ request }) => {
      const response = await request.post('/api/users', {
        data: {
          name: 'Bruna Silva',
          job: 'Quality Assurance Engineer Pleno',
        },
      })

      const body = await response.json()
      expect(response.status()).toBe(201)

      console.log(
        'Request return status: ' + response.status() + ' with response',
        body,
      )
    },
  )

  //Cenário deve retornar status de falha
  test.fail(
    'CT02 - não deve criar novo usuário com valores vazios no payload',
    { tag: ['@high', '@post', '@users'] },
    async ({ request }) => {
      const userApi = new UsersAPI(request)
      const response = await userApi.createUser({ name: '', job: '' })

      const body = await response.json()
      expect(response.status()).toBe(401)

      console.log('response of request:', body)
    },
  )

  //Cenário deve retornar status de falha
  test.fail(
    'CT03 - não deve cadastrar usuário com tipagem inválida no payload',
    { tag: ['@high', '@post', '@users'] },
    async ({ request }) => {
      const userApi = new UsersAPI(request)
      const response = await userApi.createUser({ name: 123, job: true })

      const status = response.status()
      expect(response.status()).toBe(401)

      console.log('status of request:', status)
    },
  )

  test(
    'CT04 - validando dados de contrato no corpo da resposta',
    { tag: ['@high', '@post', '@users'] },
    async ({ request }) => {
      const response = await request.post('api/users', {
        data: {
          name: 'Carolina Godoy',
          job: 'Software QA Engineer III',
        },
      })

      const body = await response.json()
      expect(response.status()).toBe(201)
      expect(body.name).toBe('Carolina Godoy')
      expect(body.job).toBe('Software QA Engineer III')

      expect(body).toEqual(
        expect.objectContaining({
          name: expect.any(String),
          job: expect.any(String),
          id: expect.any(String),
        }),
      )

      console.log(body)
    },
  )
})
