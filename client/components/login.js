const login = () => {
    return(`
    
        <form action="" enctype="multipart/form-data" method="post" class="sign_up">
        <img src="imgs/hive.png" alt="">
        <h4>Login</h4>
            <input type="email" name="email" placeholder="Email">
            <input type="password" name="password" placeholder="Password">
            <button class="submit">login<i class="fa fa-user-circle"></i></button>
        </form>

    `)
}

export default login
