import { Client } from "../models/client"

class IndexController {

  public index = (req: any, res: any) => {

    return res.render('index', { svg: 'app-funcionalidad' })
  }

  public client = async (req: any, res: any) => {
    const modelo = new Client()
    let cliente: any
    try { 
     cliente = await modelo.get()
    }catch(e){
      console.log(e)
    }

    return res.render('client', { cliente })
  }
}

const controller = new IndexController()

export default controller