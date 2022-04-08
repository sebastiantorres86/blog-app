const dummy = blogs => {
  return 1
}

const totalLikes = blogs => {
  const sumWithInitial = blogs.reduce(
    (previousValue, currentValue) => previousValue + currentValue.likes,
    0
  )

  return blogs.length === 0 ? 0 : sumWithInitial
}

module.exports = {
  dummy,
  totalLikes
}
