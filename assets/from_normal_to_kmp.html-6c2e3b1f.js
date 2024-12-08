const a=JSON.parse(`{"key":"v-28bad452","path":"/posts/2024/from_normal_to_kmp.html","title":"从暴力枚举到KMP算法","lang":"zh-CN","frontmatter":{"title":"从暴力枚举到KMP算法","description":"从暴力枚举到KMP算法","tag":["KMP","算法","字符串"],"date":"2024-07-19T00:00:00.000Z","head":[["meta",{"property":"og:url","content":"https://zxgaer.top/posts/2024/from_normal_to_kmp.html"}],["meta",{"property":"og:site_name","content":"Zxgaer's Blog"}],["meta",{"property":"og:title","content":"从暴力枚举到KMP算法"}],["meta",{"property":"og:description","content":"从暴力枚举到KMP算法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T15:03:29.000Z"}],["meta",{"property":"article:author","content":"Zxgaer"}],["meta",{"property":"article:tag","content":"KMP"}],["meta",{"property":"article:tag","content":"算法"}],["meta",{"property":"article:tag","content":"字符串"}],["meta",{"property":"article:published_time","content":"2024-07-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-07T15:03:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"从暴力枚举到KMP算法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-07-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-07T15:03:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zxgaer\\",\\"url\\":\\"https://zxgaer.top\\"}]}"]]},"headers":[{"level":3,"title":"暴力枚举（朴素算法）","slug":"暴力枚举-朴素算法","link":"#暴力枚举-朴素算法","children":[]},{"level":3,"title":"下面来看看暴力枚举的缺点","slug":"下面来看看暴力枚举的缺点","link":"#下面来看看暴力枚举的缺点","children":[]},{"level":3,"title":"从暴力匹配到KMP算法","slug":"从暴力匹配到kmp算法","link":"#从暴力匹配到kmp算法","children":[]}],"git":{"createdTime":1733583809000,"updatedTime":1733583809000,"contributors":[{"name":"Zxgaer","email":"zaixiage@outlook.com","commits":1}]},"readingTime":{"minutes":2.63,"words":789},"filePathRelative":"posts/2024/from_normal_to_kmp.md","localizedDate":"2024年7月19日","excerpt":"<p><strong>例1</strong> 给定两个字符串 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>S</mi><mn>1</mn></mrow><annotation encoding=\\"application/x-tex\\">S1</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05764em;\\">S</span><span class=\\"mord\\">1</span></span></span></span> 和 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>S</mi><mn>2</mn></mrow><annotation encoding=\\"application/x-tex\\">S2</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05764em;\\">S</span><span class=\\"mord\\">2</span></span></span></span>，<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>S</mi><mn>2</mn></mrow><annotation encoding=\\"application/x-tex\\">S2</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05764em;\\">S</span><span class=\\"mord\\">2</span></span></span></span>是<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>S</mi><mn>1</mn></mrow><annotation encoding=\\"application/x-tex\\">S1</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05764em;\\">S</span><span class=\\"mord\\">1</span></span></span></span>的子串，输出<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>S</mi><mn>2</mn></mrow><annotation encoding=\\"application/x-tex\\">S2</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05764em;\\">S</span><span class=\\"mord\\">2</span></span></span></span>在<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>S</mi><mn>1</mn></mrow><annotation encoding=\\"application/x-tex\\">S1</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05764em;\\">S</span><span class=\\"mord\\">1</span></span></span></span>中所有的起始下标</p>"}`);export{a as data};