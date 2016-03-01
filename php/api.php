<?php

//ini_set('error_reporting', E_ALL|E_STRICT);
//ini_set('display_errors', 1);

include('conf.php');

$action = filter_input(INPUT_GET, 'action');
$callback = filter_input(INPUT_GET, 'callback');
$data = array();

header('Content-Type: text/javascript; charset=utf8');
header('Access-Control-Allow-Origin: '.$allow_origin);
header('Access-Control-Max-Age: 3628800');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

if(isset($callback))
{    
    if($action == 'ValidateVersion')
    {
        $appVersion = filter_input(INPUT_GET, 'AppVersion');
        
        if(isset($appVersion))
        {
            $html = '';
            if($appVersion === $current_version)
            {
                $html = 'Имате последњу верзију апликације';
            }
            else
            {
                $html = 'Постоји нова верзија.'
                        . '</br>Преузмите на следећи <a href="'.$download_url.'" target="_blank">линк</a>';
            }
            $data['html'] = $html;

            $data['status'] = 'success';
        }
        else
        {
            $data['status'] = 'failure';
            $data['message'] = "no app version";
        }
    }
    else
    {
        $data['status'] = 'failure';
        $data['message'] = "bad action2";
    }
    
    $data = json_encode($data);
    echo $callback.'('.$data.');';
}
else
{
    $data['status'] = 'failure';
    $data['message'] = "bad action1";
    $data = json_encode($data);
    echo $data;
}

