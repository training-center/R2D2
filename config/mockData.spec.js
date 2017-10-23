import mockData from './mockData.js'

// Sample of a JSON Schema
const schema = {
  "properties": {
    "UID": {
      "properties": {
        "conhecimentos": {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "contatos": {
          "properties": {
            "FaceBook": {
              "type": "string"
            },
            "GitHub": {
              "type": "string"
            },
            "LinkedIn": {
              "type": "string"
            },
            "Site": {
              "type": "string"
            },
            "Twitter": {
              "type": "string"
            },
            "Youtube": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "email": {
          "type": "string"
        },
        "nome": {
          "type": "string"
        },
        "termos": {
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  "type": "object"
}

describe('mockData() with random samples', () => {

  it('mockData(schema) return 1 sample', () => {
    const sampleData = mockData(schema)
    expect(sampleData.length).toBe(1)
  })

  it('mockData(schema, 1) return 1 sample', () => {
    const sampleData = mockData(schema, 1)
    expect(sampleData.length).toBe(1)
  })

  it('mockData(schema, 5) return 5 samples', () => {
    const sampleData = mockData(schema, 5)
    expect(sampleData.length).toBe(5)
  })

  it('mockData(schema, 0) return 0 samples', () => {
    const sampleData = mockData(schema, 0)
    expect(sampleData.length).toBe(0)
  })

  it('mockData(schema, undefined) return 1 sample', () => {
    const sampleData = mockData(undefined)
    expect(sampleData.length).toBe(1)
  })

  it('mockData(schema, null) return 1 sample', () => {
    const sampleData = mockData(schema, null)
    expect(sampleData.length).toBe(1)
  })

  it('mockData(schema, "asdasd") return 1 sample', () => {
    const sampleData = mockData(schema, 'asdasd')
    expect(sampleData.length).toBe(1)
  })

  it('mockData(schema, NaN) return 1 sample', () => {
    const sampleData = mockData(schema, NaN)
    expect(sampleData.length).toBe(1)
  })
})
