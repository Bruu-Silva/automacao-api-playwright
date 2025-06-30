import { APIRequestContext, APIResponse } from '@playwright/test'

export class UsersAPI {
  constructor(private request: APIRequestContext) {}

  async getUserById(userId: number): Promise<APIResponse> {
    return await this.request.get(`/api/users/${userId}`)
  }
}
