switch (document.location.host) {
  case 'web.telegram.org': {
    const customStyle = document.createElement('style');
    customStyle.innerHTML = `
      /* Body */

      body {
          font: 14px/18px 'SF UI Display', '蘋方-繁', 'Open Sans',"Lucida Grande","Lucida Sans Unicode",Arial,Helvetica,Verdana,sans-serif;
      }

      b, strong {
          font-weight: 500;
      }

      .nano > .nano-pane {
          display: none !important;
      }

      .nano > .nano-content-s {
          position: absolute;
          overflow: scroll;
          overflow-x: hidden;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
      }

      /* Layout */

      .im_page_wrap {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          max-width: 100%;
          box-shadow: none;
          border: 0;
          border-radius: 0;
      }

      .footer_wrap {
          display: none;
      }

      .im_dialogs_col {
          height: calc(100vh - 58px) !important;
          margin-right: 0;
      }

      .im_dialogs_scrollable_wrap {
          padding: 0;
      }

      .im_dialogs_col_wrap {
          width: 320px;
          border-right: 1px solid #ddd;
      }

      .im_history_col_wrap {
          margin-top: 58px;
          width: calc(100vw - 320px) !important;
          /* height: calc(100vh - 58px - 128px) !important; */
      }

      /* Head and Search */

      .tg_page_head {
          position: absolute;
          z-index: 10;
          top: 0;
          left: 0;
          right: 0;
          pointer-events: none;
      }

      .tg_head_split {
          margin: 0 !important;
          max-width: 100% !important;
          background: transparent;
          height: 58px;
          pointer-events: none;
      }

      .icon-tg-title {
          display: none;
      }

      .tg_head_btn.dropdown-toggle {
          width: 60px;
          padding: 21px 20px;
          pointer-events: auto;
      }

      .dropdown-menu {
          pointer-events: all;
      }

      .dropdown.open .tg_head_btn, .tg_head_btn:hover {
          background: transparent;
      }

      .tg_head_logo_wrap {
          pointer-events:  none;
          width: 320px;
      }

      .tg_head_logo_dropdown .icon-bar {
          border-radius: 2px;
          background-color: #b9cfe3;
      }

      .tg_head_logo_dropdown .icon-hamburger-wrap {
          margin: 0 !important;
          width: 20px;
      }

      .im_dialogs_panel { /* Search bar container */
          padding-left: 60px;
          box-sizing: border-box;
      }
      .im_dialogs_search_field {
          border-radius: 5px;
          background-color: #f4f4f4 !important;
          border-color: #f4f4f4 !important;
      }

      .im_dialogs_search_field::placeholder {
          color: #bababa;
      }

      .im_dialogs_search_field:active, .im_dialogs_search_field:focus {
          background-color: #f3f3f3 !important;
          border-color: #f3f3f3 !important;
      }

      .tg_head_main_wrap {
          pointer-events: auto;
          width: calc(100vw - 320px);
          background-color: #fff;
          border-bottom: 1px solid #ddd;
      }

      .tg_head_connecting_wrap {
          height: 58px;
      }

      .tg_head_peer_title_wrap .tg_head_btn {
          padding: 11px 30px;
          height: 59px;
          display: flex;
          flex-direction: column;
          justify-content: center;
      }

      .tg_head_peer_title {
          display: block;
          font-size: 14px;
          font-weight: 500;
          color: #000;
      }

      .tg_head_peer_status {
          display: block;
          margin-top: 0px;
          font-size: 14px;
          font-weight: 200;
          color: #999999;
      }

      .tg_head_connecting_text {
          padding: 19px 30px;
      }

      a.tg_head_btn {
          padding: 21px 19px;
      }

      a.tg_head_btn:hover {
          color: hsl(209, 43%, 50%);
      }

      /* User Colors */

      .user_color_1,
      .user_color_1:hover {
          color: #895dd5;
      }
      .user_color_2,
      .user_color_2:hover {
          color: #13b297;
      }
      .user_color_3,
      .user_color_3:hover {
          color: #3c72ed;
      }
      .user_color_4,
      .user_color_4:hover {
          color: #3ca5ec;
      }
      .user_color_5,
      .user_color_5:hover {
          color: #fc5c51;
      }
      .user_color_6,
      .user_color_6:hover {
          color: #895dd5;
      }
      .user_color_7,
      .user_color_7:hover {
          color: #3ca5ec;
      }
      .user_color_8,
      .user_color_8:hover {
          color: #3c72ed;
      }

      .user_bgcolor_1 {
          background: linear-gradient(to top, #55cb68 10%, #9fde7e);
      }
      .user_bgcolor_2 {
          background: linear-gradient(to top, #d669ed 10%, #e0a1f3);
      }
      .user_bgcolor_3 {
          background: linear-gradient(to top, #6560ff 10%, #82afff);
      }
      .user_bgcolor_4 {
          background: linear-gradient(to top, #ff516a 10%, #ff875f);
      }
      .user_bgcolor_5 {
          background: linear-gradient(to top, #2ac9b7 10%, #53ecd5);
      }
      .user_bgcolor_6 {
          background: linear-gradient(to top, #2a9ef1 10%, #70d4fd);
      }
      .user_bgcolor_7 {
          background: linear-gradient(to top, #2ac9b7 10%, #53ecd5);
      }
      .user_bgcolor_8 {
          background: linear-gradient(to top, #ffa85c 10%, #ffcc6a);
      }

      /* Dialogs */

      .im_dialog_wrap::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 72px;
          right: 0;
          height: 1px;
          background-color: #eaeaea;
      }

      .im_dialogs_scrollable_wrap a.im_dialog {
          padding: 5px 10px;
      }

      .im_dialogs_scrollable_wrap .active a.im_dialog,
      .im_dialogs_scrollable_wrap .active a.im_dialog:hover {
          background: #4c91c7;
      }

      .im_dialogs_scrollable_wrap .active .im_dialog_message,
      .im_dialogs_scrollable_wrap .active .im_dialog_message * {
          color: #fff !important;
      }

      .im_dialogs_scrollable_wrap .active.im_dialog_wrap::after {
          content: none;
      }

      div.im_dialog_photo {
          margin-right: 10px;
          margin-top: 4px;
      }

      .im_dialog_photo {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          overflow: hidden;
      }

      div.im_dialog_photo .peer_initials {
          font-size: 0;
      }

      div.im_dialog_photo .peer_initials::first-letter {
          font-size: 20px;
          line-height: 52px;
          font-weight: 600;
          font-family: 'Hiragino Maru Gothic ProN';
      }

      .im_dialog_peer {
          margin-bottom: 0px;
          font-weight: 500;
      }

      .im_dialog_message {
          margin-top: 2px;
          white-space: normal;
          max-height: 38px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          color: #999;
          font-size: 13px;
          font-weight: 300;
      }

      .im_dialog_chat_from_wrap,
      .im_dialog_chat_from_wrap *:nth-child(1) {
          color: #000;
          font-weight: 400;
      }

      .im_dialog_chat_from_wrap *:nth-child(2) {
          color: #999;
      }

      .im_dialog_message_wrap {
          height: 60px;
      }

      .im_short_message_text,
      .im_short_message_media,
      .im_short_message_service {
          color: #999 !important;
      }

      .im_dialog_date {}

      .im_dialog_badge {
          position: absolute;
          right: 0;
          bottom: 3px;
          font-weight: 200;
          background: #4ba3e2;
          padding: 5px 8px;
      }

      .im_dialog_badge_muted {
          background: #d7d7d7;
      }

      .im_dialog_meta {
          height: 60px;
          position: relative;
      }

      .im_dialogs_col .nano > .nano-pane {
          right: 3px;
      }

      /* History */

      .im_history_pinned_wrap {
          padding: 10px 10px 7px 20px;
          border-bottom: 1px solid #ddd;
      }

      .im_message_reply_border {
          background: #4ba3e2;
          height: 36px;
      }


      .im_message_reply_author {
          font-weight: 500;
          color: #248FDB;
          margin-bottom: 3px;
      }

      .im_message_reply_body,
      .im_message_reply_body * {
          font-size: 13px !important;
          font-weight: 300 !important;
          color: #000 !important;
      }

      .im_message_reply_body .copyonly {
          color: transparent !important;
      }

      .im_message_author, .im_message_fwd_author {
          font-weight: 400;
      }

      .im_message_author_admin {
          font-weight: 300;
          color: #999;
      }

      .im_message_date_split_text {
          font-weight: 300;
          color: #333;
      }

      .im_service_message {
          font-weight: 300;
      }

      .im_message_meta {
          font-weight: 300;
      }

      .im_message_selected .im_message_date, .im_message_selected .im_message_document_size, .im_message_selected .im_message_audio_duration, .im_message_selected .im_message_audio_size, .im_message_selected .im_message_fwd_date, .im_message_selected .im_message_author_admin, .im_message_selected .im_message_views_cnt, .im_message_selected .im_message_sign_link, .im_history_select_active .im_message_outer_wrap:hover .im_message_date, .im_history_select_active .im_message_outer_wrap:hover .im_message_document_size, .im_history_select_active .im_message_outer_wrap:hover .im_message_audio_duration, .im_history_select_active .im_message_outer_wrap:hover .im_message_audio_size, .im_history_select_active .im_message_outer_wrap:hover .im_message_fwd_date, .im_history_select_active .im_message_outer_wrap:hover .im_message_author_admin, .im_history_select_active .im_message_outer_wrap:hover .im_message_views_cnt, .im_history_select_active .im_message_outer_wrap:hover .im_message_sign_link {
          color: #999 !important;
      }

      /* Bottom Panel */

      .im_bottom_panel_wrap {
          border-top: 1px solid #ddd;
      }

      .im_panel_own_photo {
          display: none !important;
      }

      .composer_emoji_panel {
          display: none;
      }

      .im_send_form {
          max-width: 100%;
          left: 0;
          right: 64px;
      }

      .im_send_panel_wrap {
          max-width: 100%;
      }

      .composer_rich_textarea {
          box-shadow: none !important;
          font-size: 16px;
      }

      .im_submit {
          opacity: 0;
      }

      .composer_emoji_tooltip {
          margin-left: -245px;
      }

      .composer_emoji_tooltip_tail {
          left: 88%;
      }

      .im_send_panel_wrap {
          padding-bottom: 12px;
      }

      .im_edit_panel_border {
          display: none;
      }

      .im_edit_panel_wrap {
          padding: 34px 0 34px;
      }
    `;
    document.addEventListener('DOMContentLoaded', () => {
      document.body.appendChild(customStyle);

      const showScrollbar = () => {
        for (const element of document.getElementsByClassName('nano-content')) {
          element.className = element.className.replace('nano-content', 'nano-content-s');
        }
      };

      setTimeout(showScrollbar, 5000);
      setTimeout(showScrollbar, 10000);
      setTimeout(showScrollbar, 15000);
    });
    break;
  }
  default:
    break;
}
