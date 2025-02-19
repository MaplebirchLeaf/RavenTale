NamedNPC.add(
    new NamedNPC(
        'Tsukihan',
        '神社之人',
        '月羽',
        'human'
    )
    .Init('f', 'teen')
    .setValue('insecurity', 'ethics')
    .setValue('visit', 0)
    .setColour('pale', 'red', 'white')
    .isImportant()
    .setVirginity(
        {
            anal: true,
            kiss: true,
            oral: true,
            penile: true,
            vaginal: true,
            handholding: true,
        }
    )
);

const myNpcSetting = {
    Tsukihan: {
        visit: { maxValue: 15 },
        important : () => C.npc.Tsukihan?.visit > 5,
        love: { maxValue: 150 },
        lust: { maxValue: 100 },
        dom: { name: '傲慢', maxValue: 200, activeIcon: 'img/ui/arrogant.png', color: 'blue'},
        trauma: { 
            name: () => {
                if (V.Tsukihanfuture == 'balance'){
                    return '持衡';
                } else if (V.Tsukihanfuture == 'rotten'){
                    return '腐败';
                }
            }, 
            maxValue: 75,  
            activeIcon: () => {
                if (V.Tsukihanfuture == 'balance') {
                    return 'img/ui/balance.png';
                } else if (V.Tsukihanfuture == 'rotten'){
                    return 'img/ui/rotten.png';
                }
            },
            color: () => {
                if (V.Tsukihanfuture == 'balance') {
                    return 'gold';
                } else if (V.Tsukihanfuture == 'rotten'){
                    return 'purple';
                }
            },
        },
        loveInterest : () => C.npc.Tsukihan?.love > 120 && C.npc.Tsukihan?.visit == 15,
    }
};

Object.assign(setup.ModNpcSetting, myNpcSetting);

Macro.add('TsukihanOpinion', {
    handler: function () {
        // 这里写你要展示的 Tsukihan 的关系文本
        if (V.loveInterest.primary == 'Tsukihan') {
            if (C.npc.Tsukihan.trauma > 50 && V.Tsukihanfuture == 'balance') {
                if (C.npc.Tsukihan.lust >= 80){
                    $(this.output).append('月羽 <span class="gold">对你保持一定的距离，似乎不太确定该如何面对你。</span>');
                } else {
                    $(this.output).append('月羽 <span class="lewd">觉得你有些迷失方向，尝试引导你走向更好的路。 </span>');
                };
            } else if (C.npc.Tsukihan.trauma > 50 && V.Tsukihanfuture == 'rotten') {
                if (C.npc.Tsukihan.lust >= 80){
                    $(this.output).append('月羽 <span class="pink">已完全迷失在对你的欲望中，无法自拔。</span>');
                } else {
                    $(this.output).append('月羽 <span class="lewd">爱你无以言表。</span>');
                };
            } else {
                if (C.npc.Tsukihan.lust > 80) {
                    $(this.output).append('月羽 <span class="lewd">无法掩饰对你的欲望，内心的情感愈加深沉。</span>');
                }else if (C.npc.Tsukihan.lust > 60) {
                    $(this.output).append('月羽 <span class="lewd">对你有着强烈的吸引力，内心充满了渴望。</span>');
                } else if (C.npc.Tsukihan.lust > 40) {
                    $(this.output).append('月羽 <span class="lewd">对你深深着迷，几乎无法控制自己的感情。</span>');
                } else {
                    $(this.output).append('月羽 <span class="lewd">觉得你非常有魅力，愿意与之建立深厚的关系。</span>');
                };
            }
        } else if (T.npcConfig.Tsukihan.important == true) {
            if (C.npc.Tsukihan.dom == 200){
                $(this.output).append('月羽 <span class="red">对你充满了极端的轻视，甚至无法容忍你的存在。</span>');
            } else if (C.npc.Tsukihan.love > 120) {
                $(this.output).append('月羽 <span class="green">对你感到十分欣赏，认为你是个有趣的人。</span>');
            } else if (C.npc.Tsukihan.love > 60) {
                $(this.output).append('月羽 <span class="teal">对你产生了一些好奇，想要了解你更多。</span>');
            } else if (C.npc.Tsukihan.love > 20) {
                $(this.output).append('月羽 <span class="lblue">对你冷淡，似乎不太在意。</span>');
            } else {
                $(this.output).append('月羽 对你没什么特别的看法。 ');
            };
        } else {
            $(this.output).append('月羽 对你没什么看法。 ');
        };
    }
});

function clampTsukihanStats() {
    // 确保 C.npc.Tsukihan 已经存在
    if (C.npc && C.npc.Tsukihan) {
        if (C.npc.Tsukihan.love > 150) {
            C.npc.Tsukihan.love = 150;
        }
        if (C.npc.Tsukihan.lust > 100) {
            C.npc.Tsukihan.lust = 100;
        }
        if (C.npc.Tsukihan.visit > 15) {
            C.npc.Tsukihan.visit = 15;
        }
        if (C.npc.Tsukihan.dom > 200) {
            C.npc.Tsukihan.dom = 200;
        }
        if (C.npc.Tsukihan.trauma > 75) {
            C.npc.Tsukihan.trauma = 75;
        }

        // 设置最小值为0的限制
        if (C.npc.Tsukihan.love < 0) C.npc.Tsukihan.love = 0;
        if (C.npc.Tsukihan.lust < 0) C.npc.Tsukihan.lust = 0;
        if (C.npc.Tsukihan.visit < 0) C.npc.Tsukihan.visit = 0;
        if (C.npc.Tsukihan.dom < 0) C.npc.Tsukihan.dom = 0;
        if (C.npc.Tsukihan.trauma < 0) C.npc.Tsukihan.trauma = 0;
    }  
}

// 在以下时机自动执行：
// 1. 每次回合结束
$(document).on(':passageend', function() {
    if (C.npc && C.npc.Tsukihan) {
        clampTsukihanStats();
    }
});
// 2. 每次NPC交互后
$(document).on('npc_interaction_end', function() {
    if (C.npc && C.npc.Tsukihan) {
        clampTsukihanStats();
    }
});

// 3. 直接挂载到NPC对象
if (C.npc && C.npc.Tsukihan) {
    C.npc.Tsukihan.love = new Proxy(C.npc.Tsukihan.love || {}, {
        set: function(target, prop, value) {
            if (prop === 'value') {
                if (value < 0) value = 0;  // 最小值为0
                if (value > 150) value = 150;
            }
            target[prop] = value;
            return true;
        }
    });
    C.npc.Tsukihan.lust = new Proxy(C.npc.Tsukihan.lust || {}, {
        set: function(target, prop, value) {
            if (prop === 'value') {
                if (value < 0) value = 0;  // 最小值为0
                if (value > 100) value = 100;
            }
            target[prop] = value;
            return true;
        }
    });
    C.npc.Tsukihan.visit = new Proxy(C.npc.Tsukihan.visit || {}, {
        set: function(target, prop, value) {
            if (prop === 'value') {
                if (value < 0) value = 0;  // 最小值为0
                if (value > 15) value = 15;
            }
            target[prop] = value;
            return true;
        }
    });
    C.npc.Tsukihan.dom = new Proxy(C.npc.Tsukihan.dom || {}, {
        set: function(target, prop, value) {
            if (prop === 'value') {
                if (value < 0) value = 0;  // 最小值为0
                if (value > 200) value = 200;
            }
            target[prop] = value;
            return true;
        }
    });
    C.npc.Tsukihan.trauma = new Proxy(C.npc.Tsukihan.trauma || {}, {
        set: function(target, prop, value) {
            if (prop === 'value') {
                if (value < 0) value = 0;  // 最小值为0
                if (value > 75) value = 75;
            }
            target[prop] = value;
            return true;
        }
    });
}
