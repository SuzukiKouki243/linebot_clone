const linebot = require('../index.js');
const line = 'https://api.line.me/v2/bot';

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  verify: true // default=true
});

bot.on('message', function (event) {
  console.log('**demo.js message event in');
  console.log('**%O', event);
  switch (event.message.type) {
    case 'text':
      switch (event.message.text) {
        case 'アカウント連携':

          console.log('**userId=', event.source.userId);
          console.log('**channelAccessToken=', event.source.channelAccessToken);
          
          const client = new line.Client({
              channelAccessToken: 'r5iTmDLe9WOD6fn6C8qkjGxhc0JW/YtmKYNf+7bgTBG+AQqsTV7GCx9t1EyYslZwU1Bm1jSSGxOHHI5aM57XcGX2mMFgGKR3HL+aSOWIn1aTpiOhdRB/BVdzMcTydAc9G13430UAft4U21lBflUX2gdB04t89/1O/w1cDnyilFU='
           });
     
          
          event.reply({
            type: 'template',
            altText: 'this is a buttons template',
            template: {
              type: 'buttons',
              text: '図書館の資料を検索します。下のメニューより検索の種類を選択して下さい',
              actions: [{
                type: 'uri',
                label: '簡単検索',
                uri: 'https://www.lics-saas.nexs-service.jp/licsdemo/spopac/index.do'
              }, {
                type: 'uri',
                label: '詳細検索',
                uri: 'https://www.lics-saas.nexs-service.jp/licsdemo/spopac/searchexpert.do'
              }]
            }
          });
          break;
        case '資料検索':
          event.reply({
            type: 'template',
            altText: 'this is a buttons template',
            template: {
              type: 'buttons',
              text: '図書館の資料を検索します。下のメニューより検索の種類を選択して下さい',
              actions: [{
                type: 'uri',
                label: '簡単検索',
                uri: 'https://www.lics-saas.nexs-service.jp/licsdemo/spopac/index.do'
              }, {
                type: 'uri',
                label: '詳細検索',
                uri: 'https://www.lics-saas.nexs-service.jp/licsdemo/spopac/searchexpert.do'
              }]
            }
          });
          break;
        case 'FAQ':
          event.reply({
            type: 'template',
            altText: 'this is a buttons template',
            template: {
              type: 'buttons',
              text: 'お客様のご質問にお答えします。下のメニューよりご希望の内容をタップしてください。',
              actions: [{
                type: 'message',
                label: 'よくある質問を見る',
                text: 'よくある質問を見る'
              }, {
                type: 'message',
                label: 'カテゴリから検索する',
                text: 'カテゴリから検索する'
              }]
            }
          });
          break;
        case 'よくある質問を見る':
          event.reply({
            type: 'template',
            altText: 'this is a buttons template',
            template: {
              type: 'carousel',
              columns: [
              {
                title: '貸出の延長はできますか？',
                text: '返却日までに利用が終わらない場合は、１回に限り返却期限を延長できます。',
                actions:[{
                  type: "uri",
                  label: "詳細を見る",
                  uri: "https://line.me/ja/"
                 }]
               },
               {
                title: '資料のコピーはできますか？',
                text: '館内の資料に限りコピーできます。',
                actions:[{
                  type: "uri",
                  label: "詳細を見る",
                  uri: "https://line.me/ja/"
                 }]
               },
               {
                title: '返却の方法は？',
                text: 'お返しになる資料を返却カウンターにお持ちください。',
                actions:[{
                  type: "uri",
                  label: "詳細を見る",
                  uri: "https://line.me/ja/"
                 }]
               },
              ]
             }
            });
          break;
         case 'カテゴリから検索する':
          event.reply({
            type: 'template',
            altText: 'this is a buttons template',
            template: {
              type: 'carousel',
              columns: [
              {
                title: '貸出に関するご質問',
                text: '貸出に関する質問［3件］',
                actions:[{
                  type: "message",
                  label: "選択",
                  text: "貸出に関する質問"
                 }]
               },
               {
                title: '施設に関するご質問',
                text: '施設に関する質問［3件］',
                actions:[{
                  type: "message",
                  label: "選択",
                  text: "施設に関する質問"
                 }]
               }
              ]
             }
            });
          break;
          case '貸出に関する質問':
          event.reply({
            type: 'template',
            altText: 'this is a buttons template',
            template: {
              type: 'carousel',
              columns: [
              {
                title: '貸出の延長はできますか？',
                text: '返却日までに利用が終わらない場合は、１回に限り返却期限を延長できます。',
                actions:[{
                  type: "uri",
                  label: "詳細を見る",
                  uri: "https://line.me/ja/"
                 }]
               },
               {
                title: '貸出に上限がありますか？',
                text: '図書・雑誌・紙芝居は1人10冊まで、2週間借りられます。CD・DVDは1人3点まで、1週間借りられます。',
                actions:[{
                  type: "uri",
                  label: "詳細を見る",
                  uri: "https://line.me/ja/"
                 }]
               },
               {
                title: '貸出できる期間は？',
                text: '図書・雑誌・紙芝居は2週間、CD・DVDは1週間です。',
                actions:[{
                  type: "uri",
                  label: "詳細を見る",
                  uri: "https://line.me/ja/"
                 }]
               }
              ]
             }
            });
          break;
          case '施設に関する質問':
          event.reply({
            type: 'template',
            altText: 'this is a buttons template',
            template: {
              type: 'carousel',
              columns: [
              {
                title: '自習室はありますか？',
                text: '自習室は中央図書館と東図書館、西図書館にあります。',
                actions:[{
                  type: "uri",
                  label: "詳細を見る",
                  uri: "https://line.me/ja/"
                 }]
               },
               {
                title: '会議室や視聴覚室の利用はできますか？',
                text: '中央図書館には、視聴覚室、展示集会室、和室があります。',
                actions:[{
                  type: "uri",
                  label: "詳細を見る",
                  uri: "https://line.me/ja/"
                 }]
               },
               {
                title: '障害者向けのサービスはありますか？',
                text: '郵送による貸出制度等を行っています。',
                actions:[{
                  type: "uri",
                  label: "詳細を見る",
                  uri: "https://line.me/ja/"
                 }]
               },
              ]
             }
            });
          break;
        case 'Me':
          event.source.profile().then(function (profile) {
            return event.reply('Hello ' + profile.displayName + ' ' + profile.userId);
          });
          break;
        case 'Member':
          event.source.member().then(function (member) {
            return event.reply(JSON.stringify(member));
          });
          break;
        case 'Picture':
          event.reply({
            type: 'image',
            originalContentUrl: 'https://d.line-scdn.net/stf/line-lp/family/en-US/190X190_line_me.png',
            previewImageUrl: 'https://d.line-scdn.net/stf/line-lp/family/en-US/190X190_line_me.png'
          });
          break;
        case 'Location':
          event.reply({
            type: 'location',
            title: 'LINE Plus Corporation',
            address: '1 Empire tower, Sathorn, Bangkok 10120, Thailand',
            latitude: 13.7202068,
            longitude: 100.5298698
          });
          break;
        case 'Push':
          bot.push(event.destination, event.message.data);
          break;
        case 'Push2':
          bot.push('Cba71ba25dafbd6a1472c655fe22979e2', 'Push to group');
          break;
        case 'Multicast':
          bot.push(['U17448c796a01b715d293c34810985a4c', 'Cba71ba25dafbd6a1472c655fe22979e2'], 'Multicast!');
          break;
        case 'Broadcast':
          bot.broadcast('Broadcast!');
          break;
        case 'Confirm':
          event.reply({
            type: 'template',
            altText: 'this is a confirm template',
            template: {
              type: 'confirm',
              text: 'Are you sure?',
              actions: [{
                type: 'message',
                label: 'Yes',
                text: 'yes'
              }, {
                type: 'message',
                label: 'No',
                text: 'no'
              }]
            }
          });
          break;
        case 'Multiple':
          return event.reply(['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']);
        case 'Total followers':
          bot.getTotalFollowers().then((result) => {
            event.reply('Total followers: ' + result.followers);
          });
          break;
        case 'Quota':
          bot.getQuota().then((result) => {
            event.reply('Quota: ' + result.value);
          });
          break;
        case 'Total reply':
          bot.getTotalReplyMessages().then((result) => {
            event.reply('Total reply messages: ' + result.success);
          });
          break;
        case 'Version':
          event.reply('linebot@' + require('../package.json').version);
          break;
        default:
          event.reply(event.message.text).then(function (data) {
            console.log('Success', data);
          }).catch(function (error) {
            console.log('Error', error);
          });
          break;
      }
      break;
    case 'image':
      event.message.content().then(function (data) {
        const s = data.toString('hex').substring(0, 32);
        return event.reply('Nice picture! ' + s);
      }).catch(function (err) {
        return event.reply(err.toString());
      });
      break;
    case 'video':
      event.reply('Nice video!');
      break;
    case 'audio':
      event.reply('Nice audio!');
      break;
    case 'location':
      event.reply([event.message.address, 'Lat:' + event.message.latitude, 'Long:' + event.message.longitude]);
      break;
    case 'sticker':
      event.reply({
        type: 'sticker',
        packageId: 1,
        stickerId: 1
      });
      break;
    default:
      event.reply('Unknown message: ' + JSON.stringify(event));
      break;
  }
});

bot.on('follow', function (event) {
  event.reply('follow: ' + event.source.userId);
});

bot.on('unfollow', function (event) {
  event.reply('unfollow: ' + event.source.userId);
});

bot.on('join', function (event) {
  if(event.source.groupId) {
    event.reply('join group: ' + event.source.groupId);
  }
  if(event.source.roomId) {
    event.reply('join room: ' + event.source.roomId);
  }
});

bot.on('leave', function (event) {
  if(event.source.groupId) {
    console.log('leave group: ' + event.source.groupId);
  }
  if(event.source.roomId) {
    console.log('leave room: ' + event.source.roomId);
  }
});

bot.on('memberJoined', function (event) {
  event.source.profile().then(function (/*profile*/) {
    if(event.source.type === 'group') {
      event.reply('memberJoined: Welcome to the group.');
    }
    if(event.source.type === 'room') {
      event.reply('memberJoined: Welcome to the room.');
    }
  });
});

bot.on('memberLeft', function (/*event*/) {
  console.log('memberLeft: Goodbye.');
});

bot.on('postback', function (event) {
  event.reply('postback: ' + event.postback.data);
});

bot.on('beacon', function (event) {
  event.reply('beacon: ' + event.beacon.hwid);
});

bot.listen('/linewebhook', process.env.PORT || 80, function () {
  console.log('LineBot is running.');
});
