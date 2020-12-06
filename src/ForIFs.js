
export function ForIFs(err) {
    if(err==="Error: The email address is badly formatted.")
    {
      return "Ошибка: Емаил не в том формате";
    }
    if (err==="Error: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later."){
      return "Ошибка: Не друг чё то ты попутал заходить не на свой аккаунт , посидика в БАНЕ!!!"
    }
    else
    {
      return err;
    }
}