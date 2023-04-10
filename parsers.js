
  
      module.exports.parse = (raw, { yaml }) => {
        const rawObj = yaml.parse(raw)
        const groups = []
        const rules = []
        return yaml.stringify({ ...rawObj, 'proxy-groups': groups, rules })
      } 
  # 建立自己的配置
    yaml:
      prepend-proxy-groups: # 建立策略组
      - name: 💸 Proxies
        type: select      
        proxies:
          - ♻️ UrlTest
          - DIRECT
      - name: 🌐 Google
        type: select
        proxies:
          - 💸 Proxies
          - 🇺🇲 US
          - 🇭🇰 HK
          - 🇨🇳 TW
          - 🇸🇬 SG
          - 🇯🇵 JP
          - 🇰🇷 KR
      - name: 🎥 Netflix
        type: select
        proxies:
          - 💸 Proxies
          - 🇸🇬 SG
          - 🇭🇰 HK
          - 🇨🇳 TW
          - 🇯🇵 JP
          - 🇺🇲 US
          - 🇰🇷 KR
      - name: Ⓜ️ Microsoft
        type: select
        proxies:
          - DIRECT
          - 💸 Proxies
          - 🇺🇲 US
          - 🇭🇰 HK
          - 🇨🇳 TW
          - 🇸🇬 SG
          - 🇯🇵 JP
          - 🇰🇷 KR
      - name: 🍎 Apple
        type: select
        proxies:
          - DIRECT
          - 💸 Proxies
          - 🇺🇲 US
          - 🇭🇰 HK
          - 🇨🇳 TW
          - 🇸🇬 SG
          - 🇯🇵 JP
          - 🇰🇷 KR
      - name: 📲 Telegram
        type: select
        proxies:
          - 💸 Proxies
          - ♻️ UrlTest
          - 🇺🇲 US
          - 🇭🇰 HK
          - 🇨🇳 TW
          - 🇸🇬 SG
          - 🇯🇵 JP
          - 🇰🇷 KR
      - name: 🤖 OpenAi
        type: select
        proxies:
          - 💸 Proxies
          - 🇺🇲 US
          - 🇭🇰 HK
          - 🇨🇳 TW
          - 🇸🇬 SG
          - 🇯🇵 JP
          - 🇰🇷 KR
      - name: 📹 YouTube
        type: select
        proxies:
          - 💸 Proxies
          - ♻️ UrlTest
          - 🇸🇬 SG
          - 🇭🇰 HK
          - 🇨🇳 TW
          - 🇯🇵 JP
          - 🇺🇲 US
          - 🇰🇷 KR
      - name: 📺 BiliBili
        type: select
        proxies:
          - DIRECT
          - 🇨🇳 TW
          - 🇭🇰 HK
      - name: 🎮 Steam
        type: select
        proxies:
          - DIRECT
          - 💸 Proxies
          - 🇺🇲 US
          - 🇭🇰 HK
          - 🇨🇳 TW
          - 🇸🇬 SG
          - 🇯🇵 JP
          - 🇰🇷 KR
      - name: ✅ Straight
        type: select
        proxies:
          - DIRECT
          - 💸 Proxies
          - 🇺🇲 US
          - 🇭🇰 HK
          - 🇨🇳 TW
          - 🇸🇬 SG
          - 🇯🇵 JP
          - 🇰🇷 KR
      - name: 🐟 Final
        type: select
        proxies:
          - DIRECT
          - 💸 Proxies
          - 🇺🇲 US
          - 🇭🇰 HK
          - 🇨🇳 TW
          - 🇸🇬 SG
          - 🇯🇵 JP
          - 🇰🇷 KR
      - name: ♻️ UrlTest
        type: url-test
        url: http://www.gstatic.com/generate_204
        interval: 300
        tolerance: 50
        proxies:
          - 💸 Proxies
      
          
      - name: 🇭🇰 HK
        type: url-test
        url: http://www.gstatic.com/generate_204
        interval: 300
        tolerance: 50
                    
      - name: 🇸🇬 SG
        type: url-test
        url: http://www.gstatic.com/generate_204
        interval: 300
        tolerance: 50
        
      - name: 🇨🇳 TW
        type: url-test
        url: http://www.gstatic.com/generate_204
        interval: 300
        tolerance: 50
              
      - name: 🇯🇵 JP
        type: url-test
        url: http://www.gstatic.com/generate_204
        interval: 300
        tolerance: 50
      
      - name: 🇺🇲 US
        type: url-test
        url: http://www.gstatic.com/generate_204
        interval: 300
        tolerance: 150
                 
      - name: 🇰🇷 KR
        type: url-test
        url: http://www.gstatic.com/generate_204
        interval: 300
        tolerance: 150
                
  # 策略组示例
      # - name: 分组名
        # type: select       # 手动选点   
        # url-test     # 自动选择延迟最低的节点
        # fallback     # 节点故障时自动切换下一个
        # laod-balance # 均衡使用分组内的节点
        # url: http://www.gstatic.com/generate_204 # 测试地址 非select类型分组必要
        # interval: 300 # 自动测试间隔时间，单位秒 非select类型分组必要
        # tolerance: 50 # 允许的偏差，节点之间延迟差小于该值不切换 非必要
        # proxies:  
          # - 节点名称或其他分组套娃
          
      commands:
        - proxy-groups.💸 Proxies.proxies=[]proxyNames|
        - proxy-groups.🇭🇰 HK.proxies=[]proxyNames|香港|HK|Hong Kong # 向指定策略组添加订阅中的节点名，可使用正则过滤
        - proxy-groups.🇨🇳 TW.proxies=[]proxyNames|台湾|新北|彰化|TW|Taiwan"
        - proxy-groups.🇯🇵 JP.proxies=[]proxyNames|"日本|川日|东京|大阪|泉日|埼玉|沪日|深日|[^-]日|JP|Japan"
        - proxy-groups.🇰🇷 KR.proxies=[]proxyNames|"韩国|韩|🇰🇷|KR|Korea|首尔"
        - proxy-groups.🇸🇬 SG.proxies=[]proxyNames|"新加坡|坡|狮城|SG|Singapore|新"
        - proxy-groups.🇺🇲 US.proxies=[]proxyNames|美国|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|US|United States
       # - proxy-groups.♻️ UrlTest.proxies=[]proxyNames|*
        - proxy-groups.🇰🇷 KR.proxies.0+DIRECT
       

        # - proxy-groups.节点名字.proxies.0+DIRECT # 向指定分组第一个位置添加一个 DIRECT 节点名
        # 一些可能用到的正则过滤节点示例，使分组更细致
        # []proxyNames|a                         # 包含a
        # []proxyNames|^(.*)(a|b)+(.*)$          # 包含a或b
        # []proxyNames|^(?=.*a)(?=.*b).*$        # 包含a和b
        # []proxyNames|^((?!b).)*a((?!b).)*$     # 包含a且不包含b
        # []proxyNames|^((?!b|c).)*a((?!b|c).)*$ # 包含a且不包含b或c
        # 更多正则教程，请看这里：https://deerchao.cn/tutorials/regex/regex.htm#top
        
  
