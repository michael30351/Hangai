<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // フォームからのデータを取得
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $captcha = $_POST['captcha'];

    // CAPTCHAの検証
    if ($captcha != "5") {
        echo "CAPTCHAの回答が間違っています。";
        exit;
    }

    // メールの設定
    $to = "sc30kd35ma30@gmail.com"; 
    $subject = "お問い合わせフォームからの送信（送信者：$name さん）";    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    // メール送信
    if (mail($to, $subject, $body, $headers)) {
        echo "メッセージが送信されました。";
    } else {
        echo "メッセージの送信に失敗しました。";
    }
} else {
    echo "無効なリクエストです。";
}
?>