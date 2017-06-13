const switchIndex = ({total,current,go}) => {
  switch (go) {
    case 'up':
      return total === current
        ? 0
        : current + 1
    case 'down':
      return current === 0
        ? total
        : current - 1
    default:
      return current
  }
}

export default switchIndex
