const { Pact, Matchers: { eachLike, string } } = require('@pact-foundation/pact')
const apiCall = require('../src/consumer')

describe('Pact with Order API', () => {
  const provider = new Pact({
    port: 8080,
    consumer: 'test consumer',
    provider: 'test provider',
  })

  beforeAll(() => provider.setup())

  afterAll(() => provider.finalize())

  describe('when a call to the API is made', () => {
    beforeAll(async () => {
      return provider.addInteraction({
        // state: 'default',
        uponReceiving: 'A request for the test endpoint',
        withRequest: {
          path: '/endpoint',
          method: 'GET',
        },
        willRespondWith: {
          body: {
            key: 'value',
            random: string(),
          },
          status: 200,
        },
      })
    })

    it('will receive the list of current orders', async () => {
      expect(await apiCall()).toEqual(expect.objectContaining({
        key: 'value',
        random: expect.any(String)
      }))
    })
  })
})