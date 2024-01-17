### harborsアプリ

#### want to 
- [ ] tailwindのsafelistの最適化

### to do 
- [x] db作成
jsonで以下のものが取ってこられている
userテーブル
```
{
  "userId": "U4af4980629...",
  "displayName": "LINE taro",
  "pictureUrl": "https://obs.line-apps.com/...",
  "statusMessage": "Hello, LINE!"
}
```
初回ログイン時に、userテーブルに登録
2回目以降は、userテーブルを更新する形にする

planの種類
```
{
}
```
- [x] ログイン
  - [x] ライン
  - [x] ラインでログインするための画面を作る
  - [x] userテーブルにuserIdをぶち込む
  - [x] vertifyTokenでidTdTokenを検証し、そのレスポンスにあるUserIDを用いてusersテーブルのidを取得する

- [ ] ログアウト
  - [ ] isersテーブルの情報を削除する
- [ ] middleware制御
https://zenn.dev/sakazuki_xyz/articles/2cabad91bb8acb

- [x] 登録処理
  - [x] 登録ボタンを押すと、dbにデータが登録される
  - [x] 同じuserが同じplanをdbに登録できないようにする
- [ ] 登録されたものがtableに表示されるようにする
  - [ ] tableRowをcontainer/presentationにわけて、containerでデータを加工してあげて、それをpresentationに渡す



- [ ] usersテーブルのカラム名をuser_idに変更
- [ ] dashboardのanyを修正
- [ ] 本番環境で動かない原因を調べる
