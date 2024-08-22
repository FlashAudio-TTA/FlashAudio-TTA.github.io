// 创建一个函数，用于生成HTML字符串
function createDiv(index) {
    // 使用模板字符串生成HTML，其中${index}会被替换为传入的参数
    return `
    <div class="columns is-centered" style="width: 90%;margin-left: auto;margin-right: auto;">
        <div class="column" style="width: 6%;">
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}_ser1"><strong style="font-size: larger;">Caption:</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo1/${index}_gt.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"><strong style="font-size: larger;">GT</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo1/${index}_scale1.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}tgt"> <strong style="font-size: larger;">w/ anchored Scale1</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo1/${index}_scale2.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}ddim"> <strong style="font-size: larger;">w/ anchored Scale2</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo1/${index}_scale3.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}ddpm"> <strong style="font-size: larger;">w/ anchored Scale3</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo1/${index}_scale4.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">w/ anchored Scale4</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo1/${index}_scale5.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}sdedit"> <strong style="font-size: larger;">w/ anchored Scale5</strong>
                </p>
            </div>
        </div>
    </div>
    <div class="columns is-centered" style="width: 90%;margin-left: auto;margin-right: auto;">
        <div class="column" style="width: 6%;">
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"><strong style="font-size: larger;"></strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"><strong style="font-size: larger;"></strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo1/${index}_nscale1.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}tgt"> <strong style="font-size: larger;">w/o anchored Scale1</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo1/${index}_nscale2.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}ddim"> <strong style="font-size: larger;">w/o anchored Scale2</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo1/${index}_nscale3.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}ddpm"> <strong style="font-size: larger;">w/o anchored Scale3</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo1/${index}_nscale4.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">w/o anchored Scale4</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo1/${index}_nscale5.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}sdedit"> <strong style="font-size: larger;">w/o anchored Scale5</strong>
                </p>
            </div>
        </div>
    </div>
    `;
}

// 创建一个函数，用于生成HTML字符串
function createRow(id) {
// 循环创建10个div
    rowid = "row"+id
    const rowElement = document.getElementById(rowid);
    for (let i = 0; i < 5; i++) {
        // 创建div
        const index = String(i);
        const div = createDiv(index);
        // 将div添加到页面中，这里假设你要添加到body中
        rowElement.innerHTML += div
        fetch('./demos/demo1/'+index+'_gt.txt')
        .then(response => response.text())
        .then(data => {
          // 使用正则表达式找出所有用[]包裹的文字
          const regex = /\[(.*?)\]/g;
          let match;
          const parts = [];
          let lastIndex = 0;
          while ((match = regex.exec(data)) !== null) {
            // 将匹配的文字用<strong style="font-size: larger;">标签包裹起来
            const marked = `<strong style="font-size: larger;"> [${match[1]}]</strong>`;
            // 将原文中的匹配文字替换为突出显示的文字
            parts.push(data.slice(lastIndex, match.index), marked);
            lastIndex = regex.lastIndex;
          }
          parts.push(data.slice(lastIndex));
          // 将处理后的文字显示在页面上
          document.getElementById(index+'_ser1').innerHTML += parts.join('');
        });
    }
}

// module.exports = { createRow };

// 创建一个函数，用于生成HTML字符串
function createDivMul(index) {
    // 使用模板字符串生成HTML，其中${index}会被替换为传入的参数
    return `
    <div class="columns is-centered" style="width: 90%;margin-left: auto;margin-right: auto;">
        <div class="column" style="width: 6%;">
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}_ser2"><strong style="font-size: larger;">Caption:</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo2/${index}_gt.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"><strong style="font-size: larger;">GT</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo2/${index}_fa1.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">FlashAudio</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo2/${index}_ag.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">AudioGen</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo2/${index}_maa2.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">Make An Audio 2</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo2/${index}_ldm2.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">AudioLDM 2</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo2/${index}_tango.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">Tango 2</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo2/${index}_cfm.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">CFM</strong>
                </p>
            </div>
        </div>
    </div>
    `;
}

// 创建一个函数，用于生成HTML字符串
function createRowMul(id) {
// 循环创建10个div
    rowid = "row"+id
    const rowElement = document.getElementById(rowid+'ser2');
    i = id
    // 创建div
    const index = String(i);
    const div = createDivMul(index);
    // 将div添加到页面中，这里假设你要添加到body中
    rowElement.innerHTML += div
    fetch('./demo/prompt/'+index+'_src.txt')
    .then(response => response.text())
    .then(data => {
        // 使用正则表达式找出所有用[]包裹的文字
        const regex = /\[(.*?)\]/g;
        let match;
        const parts = [];
        let lastIndex = 0;
        while ((match = regex.exec(data)) !== null) {
        // 将匹配的文字用<strong style="font-size: larger;">标签包裹起来
        const marked = `<strong style="font-size: larger;"> [${match[1]}]</strong>`;
        // 将原文中的匹配文字替换为突出显示的文字
        parts.push(data.slice(lastIndex, match.index), marked);
        lastIndex = regex.lastIndex;
        }
        parts.push(data.slice(lastIndex));
        // 将处理后的文字显示在页面上
        // document.getElementById(index+'_ser2').innerHTML += parts.join('');
        fetch('./demos/demo2/'+index+'_gt.txt')
        .then(response => response.text())
        .then(data => {
        // 使用正则表达式找出所有用[]包裹的文字
        const regex = /\[(.*?)\]/g;
        let match;
        const parts = [];
        let lastIndex = 0;
        while ((match = regex.exec(data)) !== null) {
            // 将匹配的文字用<strong style="font-size: larger;">标签包裹起来
            const marked = `<strong style="font-size: larger;">[${match[1]}]</strong>`;
            // 将原文中的匹配文字替换为突出显示的文字
            parts.push(data.slice(lastIndex, match.index), marked);
            lastIndex = regex.lastIndex;
        }
        parts.push(data.slice(lastIndex));
        // 将处理后的文字显示在页面上
        document.getElementById(index+'_ser2').innerHTML += parts.join('');
        });
    });
}

function createDivFew(index) {
    // 使用模板字符串生成HTML，其中${index}会被替换为传入的参数
    return `
    <div class="columns is-centered" style="width: 90%;margin-left: auto;margin-right: auto;">
        <div class="column" style="width: 6%;">
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}_ser3"><strong style="font-size: larger;">Caption:</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo3/${index}_gt.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"><strong style="font-size: larger;">GT</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo3/${index}_fa2.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">FlashAudio</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo3/${index}_lcm.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">AudioLCM</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo3/${index}_ctta.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">ConsistencyTTA</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo3/${index}_ctm.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">SoundCTM</strong>
                </p>
            </div>
        </div>
    </div>
    `;
}

// 创建一个函数，用于生成HTML字符串
function createRowFew(id) {
// 循环创建10个div
    rowid = "row"+id
    const rowElement = document.getElementById(rowid+'ser3');
    i = id
    // 创建div
    const index = String(i);
    const div = createDivFew(index);
    // 将div添加到页面中，这里假设你要添加到body中
    rowElement.innerHTML += div
    fetch('./demos/demo3/'+index+'_gt.txt')
    .then(response => response.text())
    .then(data => {
        // 使用正则表达式找出所有用[]包裹的文字
        const regex = /\[(.*?)\]/g;
        let match;
        const parts = [];
        let lastIndex = 0;
        while ((match = regex.exec(data)) !== null) {
        // 将匹配的文字用<strong style="font-size: larger;">标签包裹起来
        const marked = `<strong style="font-size: larger;"> [${match[1]}]</strong>`;
        // 将原文中的匹配文字替换为突出显示的文字
        parts.push(data.slice(lastIndex, match.index), marked);
        lastIndex = regex.lastIndex;
        }
        parts.push(data.slice(lastIndex));
        // 将处理后的文字显示在页面上
        document.getElementById(index+'_ser3').innerHTML += parts.join('');
    });
}

function createDivdic2(index) {
    // 使用模板字符串生成HTML，其中${index}会被替换为传入的参数
    return `
    <div class="columns is-centered" style="width: 100%;" style="width: 80%;margin-left: auto;margin-right: auto;">
        <div class="column" style="width: 6%;">
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}_ser4"><strong style="font-size: larger;">Caption:</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo4/${index}_gt.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"><strong style="font-size: larger;">GT</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo4/${index}_1wln.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">1-rf w/ LN</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo4/${index}_1woi.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">1-rf w/o Init</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo4/${index}_1wu.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">1-rf w/ Uniform</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo4/${index}_1womm.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">1-rf w/o Immi</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo4/${index}_2wme.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">2-rf w/ Mix-Exp</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo4/${index}_2wu.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">2-rf w/ Uniform</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/demo4/${index}_2womm.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">2-rf w/o Immi</strong>
                </p>
            </div>
        </div>
    </div>
    `;
}

// 创建一个函数，用于生成HTML字符串
function createRowdic2(id) {
// 循环创建10个div
    rowid = "row"+id
    const rowElement = document.getElementById(rowid+'ser4');
    i = id
    // 创建div
    const index = String(i);
    const div = createDivdic2(index);
    // 将div添加到页面中，这里假设你要添加到body中
    rowElement.innerHTML += div
    fetch('./demos/demo4/'+index+'_gt.txt')
    .then(response => response.text())
    .then(data => {
        // 使用正则表达式找出所有用[]包裹的文字
        const regex = /\[(.*?)\]/g;
        let match;
        const parts = [];
        let lastIndex = 0;
        while ((match = regex.exec(data)) !== null) {
        // 将匹配的文字用<strong style="font-size: larger;">标签包裹起来
        const marked = `<strong style="font-size: larger;"> [${match[1]}]</strong>`;
        // 将原文中的匹配文字替换为突出显示的文字
        parts.push(data.slice(lastIndex, match.index), marked);
        lastIndex = regex.lastIndex;
        }
        parts.push(data.slice(lastIndex));
        // 将处理后的文字显示在页面上
        document.getElementById(index+'_ser4').innerHTML += parts.join('');
    });
}