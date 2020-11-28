const index = (req, res, next) => {
  try{
    res.json({ message: 'Hello express '})
  } catch (e){
    next(e)
  }
}

export {
  index
}
