export default async function ({$auth,redirect,store}){

  let user_role = $auth.user.role_id;
  let user = $auth.user;

  if(user && user_role==1) {
    // let the user in
  } else {
    redirect('/login')
  }

}
