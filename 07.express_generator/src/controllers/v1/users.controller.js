import User from '../../models/users.model.js';

const get = async (req, res, next) => {
  try{
    const user = await User.find({});
    res.json(user)
  } catch (e){
    next(e)
  }
}

export {
  get
}
