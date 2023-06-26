
import assets from './assets'
import login from './login'
import signup from './create-account'

const {
    chat_bx,
    user_profile,
    chat_lists,
    default_chat_bx,
    update_profile,
    update_password,
} = assets

let Navbar = () => {
    return (`
        <div class="side_nav">
            <a href="" class="logo"><img src="imgs/hive.png" alt="" width="140"></a>
            <div class="links">
                <a href="" class="active" title="Chats"><i class="fa fa-message"><span>3</span></i> </a>
                <a href="" title="Create"><i class="fa fa-square-plus"></i></a>
                <a href="" title="Social"><i class="fa fa-icons"></i></a>
                <a href="" title="News"><i class="fa fa-newspaper"></i></a>
                <a href="" title="Meetings"><i class="fa fa-users"></i></a>
                <a href="" title="Blocked"><i class="fa fa-ban"></i></a>
                <a href="" title="Profile"><i class="fa fa-user-circle"></i></a>
                <a href="" title="Collaborate"><i class="fa fa-circle-nodes"></i></a>
            </div>
            <i class="fa fa-circle-plus" title="Accounts"></i>
        </div>
    `)
}


let Activites = () => {
    return (`
        <div class="activites">
            ${chat_lists()}
        </div>
    `)
}

let Display = () => {
    return (`
         <div class="chat_display">
            ${default_chat_bx()}
         </div>
    `)
}

let Subprofiles = () => {
    return (
        `
        <div class="sub_profiles">
            <div class="bx_1">
                 ${update_profile()}
            </div>
           <div class="bx_2">
            <div class="sub_message">

                <div class="chat_action_bx">

                </div>
            </div>
           </div>
            
        </div>
    `
    )
}




let layout = () => {
    return (`
        <div class="container">
            ${Navbar()}
            ${Activites()}
            ${Display()}
            ${Subprofiles()}
            ${update_password()}
        </div>
    
    `)
}
// ${user_profile()}
// ${Navbar()}
// ${Activites()}
// ${Display()}
// ${Subprofiles()}
// ${signup()}
// ${login()}

export default layout