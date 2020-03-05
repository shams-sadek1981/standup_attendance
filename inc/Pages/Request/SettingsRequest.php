<?php namespace Inc\Pages\Request;

/**
 * 
 * @package
 */

use Inc\Base\BaseController;
use Inc\Pages\Request\RequestInterface;

class SettingsRequest extends BaseController implements RequestInterface {
    
    const NAME_OF_NONCE_FIELD = 'name_of_nonce_field';
    const NAME_OF_MY_ACTION = 'name_of_my_action';

    public function request($post)
    {

        /**
         * Save Data
         */
        update_option('myname', $post['myname']);
        update_option('myaddress', $post['myaddress']);
        update_option('mobile_no', $post['mobile_no']);

        error_log(print_r($post, true));
        
    }
}