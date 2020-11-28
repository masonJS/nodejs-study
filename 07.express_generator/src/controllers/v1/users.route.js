const get = (req, res, next) => {
  try{
    res.json({ message: 'users get' })
  } catch (e){
    next(e)
  }
}

export {
  get
}
