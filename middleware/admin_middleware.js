export default async function ({$auth,redirect,store}){

  let user = $auth.user;

  if(user){
    let user_role = $auth.user.role_id;
    if(user_role==1) {
      //redirect('/admin')
    } else {
      redirect('/login')
    }
  }else{
    redirect('/login')
  }


}
