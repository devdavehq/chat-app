let chat_bx = () => {
    return (`
        <div class="message_box">
        <div class="msg_head">
            <div class="user_detail">
               <a href=""><img src="" alt=""></a>
                <span>UserHQ : &nbsp;
                <code id="active_inactive">Active</code>
            </span>
            </div>
            <div class="user_actions">
                <a href=""><i class="fa fa-video"></i></a>
                <a href=""><i class="fa fa-phone"></i></a>
            </div>
            <div class="other_actions">
                <i class="fa fa-ellipsis-vertical"></i>
            </div>
        </div>
        
        <div class="msg_body">
            <div class="back_drop"></div>
            <div class="date_bx"><span>today</span></div>
           
            <div class="receiver">
                <div class="r_time_bx">
                   <a href=""><img src="" class="r_img"></a>
                    <span class="r_sent">5:00Am</span>
                </div>
                    <p>hello i want to build a site.
                        <span class="reactions" data-reacted="true">😎</span>
                    </p>
            </div>
            <div class="sender">
                <span class="s_sent">5:00Am</span>
                    <p data-seen="false">how are you today

                        <span class="reactions" data-reacted="false">😁</span>
                </p>

                    
            </div>
        </div>
        <div class="actions">
            <form action="">
            <img src="" class="action_img">
                    <input type="text" placeholder="Write a message to UserHQ">
                    <i class="fa fa-image"></i>
                    <i class="fa fa-microphone"></i>
                    <button type="submit"><i class="fa fa-paper-plane"></i></button>
            </form>    
        </div>
    </div>
        
        `);
}
let user_profile = () => {
    return (`
            <div class="profile_card">
                <img src="imgs/hive.png" alt="">
                <span>DevDuoHQ</span>
                <p>Hey there i'm a software engineer who's available for remote jobs🐱‍👤</p>
                <a href="">edit profile<i class="fa fa-edit"></i></a>
                <a href=" class="delete_prof">delete profile<i class="fa fa-trash"></i></a>
            </div>
        `);
}
let chat_lists = () => {
    return (`
        <div class="search"><input type="text" name="search" placeholder="Search chats..."><i class="fa fa-search"></i></div>
            <h4>Chats</h4>
            <div class="chat_lists">
                <a href="">
                    <div class="chats">
                    <img src="" alt="">
                    <div class="context">
                            <div class="name_date">
                                <b>Dave</b>
                                <span>3:30AM</span>
                            </div>
                            <span class="message">Lorem ipsum dolor sit. <code>3</code></span>
                    </div>
                    </div>
                </a>
        </div>
        `);
}

let default_chat_bx = () => {
    return (`
        <div class="message_box_default">
            <div class="msg_body">Start chat👍</div>
            <div class="actions">
                <form action="">
                <img src="" class="action_img">
                        <input type="text" placeholder="Write a message to UserHQ" readonly >
                        <i class="fa fa-image"></i>
                        <i class="fa fa-microphone"></i>
                        <button type="submit" disabled><i class="fa fa-paper-plane"></i></button>
                </form>    
        </div>
         </div>
        
        `);
}

let update_profile = () => {
    return (
        `
        <form action="" class="update_profile">
                    <div class="p_img">
                        <img src="" alt="">
                        <input type="file" name="" hidden>
                        <i class="fa fa-cloud-arrow-up"></i>
                    </div>
                    <h4>Upload Image📸</h4>
                    <input type="text" name="" placeholder="Account Type" readonly>
                    <input type="text" name="" placeholder="Name" >
                    <input type="email" name="" placeholder="Email" >
                    <textarea name="" id="" cols="30" rows="10" placeholder="Description"></textarea>
                    <div class="action_btns">
                        <button type="submit">Update Profile&nbsp;<i class="fa fa-user-circle"></i></button>
                        <button type="button" onclick="reset_pass.showModal()">Edit Password&nbsp;<i class="fa fa-key"></i></button>
                    </div>
                 </form>
        `
    )
}

let update_password = () => {
    return (
        `
            <dialog class="update_pass_bx" id="reset_pass">
                <form action="" class="enter_email">
                        <h4>Enter Email to recieve Otp <i class="fa fa-times-circle" onclick="reset_pass.close()"></i></h4>
                        <input type="email" name="" placeholder="Email" >
                            <button type="submit">Send Mail&nbsp;<i class="fa fa-envelope"></i></button>
                    </form>
                    <form action="" class="change_pass">
                        <h4>Change password  <i class="fa fa-times-circle" onclick="reset_pass.close()"></i></h4>
                            <input type="text" name="" placeholder="Otp" >
                            <input type="password" name="" placeholder="Password" >
                            <input type="password" name="" placeholder="Confirm password" >
                            <button type="submit">Reset Password&nbsp;<i class="fa fa-lock"></i></button>
                    </form>
                </dialog>
        `
    )
}


export default
    {
        chat_bx,
        user_profile,
        chat_lists,
        default_chat_bx,
        update_profile,
        update_password,
    }