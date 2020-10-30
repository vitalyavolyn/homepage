module.exports = () => {
  const ageDifMs = Date.now() - new Date('2001-02-25')
  return new Date(ageDifMs).getUTCFullYear() - 1970
}
