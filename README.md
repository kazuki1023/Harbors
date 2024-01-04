### harborsアプリ

#### want to 
- [ ] tailwindのsafelistの最適化

### to do 
- [ ] db作成
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

- [ ] 登録処理
