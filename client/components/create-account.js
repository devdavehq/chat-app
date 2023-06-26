const createAcc = () => {
    return(`
    
        <form action="" enctype="multipart/form-data" method="post" class="sign_up">
        <img src="imgs/hive.png" alt="">
        <h4>create account</h4>
            <p>select account type</p>
            <select name="acc_type" id="">
                <option value="">Select Account Type</option>
                <option value="personal">personal</option>
                <option value="business">business</option>
            </select>
            <input type="email" name="email" placeholder="Email">
            <button class="submit">create account<i class="fa fa-user-circle"></i></button>
        </form>

    `)
}

export default createAcc