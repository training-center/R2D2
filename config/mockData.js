import jsf from 'json-schema-faker'

/**
 * Get random samples
 * @param  {object}  schema  schema of the desired model to get samples
 * @param  {number}  amount  amount of samples to return
 * @return {array}           retrun list of samples
 */
const mockData = (schema = {}, amount) => {
  const validAmount = (typeof amount == 'number' && !isNaN(amount)) ? parseInt(amount, 10) : 1
  const samples = new Array(validAmount)
  for (var i = samples.length - 1; i >= 0; i--) {
    samples[i] = jsf(schema)
  }
  return samples
}

export default mockData
