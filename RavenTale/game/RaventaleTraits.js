setup.ModTraits.push(
    {
        addto  : 'General Traits', // 属于哪个分类
        name   : '玄翎', // 特质名称
        text   : '奇异的翎羽庇护着你，你受到的疼痛减少了。', // 特质描述
        cond   : function () { return V.darkfeathers === true && V.brokenwings !== true; }, // 什么时候拥有这个特质
        colour : 'black' // 特质的颜色
    },
    {
        addto  : 'General Traits', // 属于哪个分类
        name   : '春晖', // 特质名称
        text   : '你无微不至，+7%护理。', // 特质描述
        cond   : function () { return V.springglow === true && V.showersunlight !== true; }, // 什么时候拥有这个特质
        colour : 'green' // 特质的颜色
    },
    {
        addto  : 'General Traits', // 属于哪个分类
        name   : '殷勤', // 特质名称
        text   : '你手胼足胝，+10%家务。', // 特质描述
        cond   : function () { return V.solicitous === true; }, // 什么时候拥有这个特质
        colour : 'blue' // 特质的颜色
    },
    {
        addto  : 'General Traits', // 属于哪个分类
        name   : '鸦<<girl>>', // 特质名称
        text   : '你的言语变得凌厉恶毒，这将加强你的语言能力。', // 特质描述
        cond   : function () { return V.ravenlang === true; }, // 什么时候拥有这个特质
        colour : 'grey' // 特质的颜色
    },
    {
        addto  : 'General Traits', // 属于哪个分类
        name   : '健足', // 特质名称
        text   : '你健步如飞，+10%腿部与足部能力。', // 特质描述
        cond   : function () { return V.healthyfeet === true; }, // 什么时候拥有这个特质
        colour : 'lblue' // 特质的颜色
    },
    {
        addto  : 'General Traits', // 属于哪个分类
        name   : '犬齿', // 特质名称
        text   : '你的咬可以造成额外的伤害。', // 特质描述
        cond   : function () { return V.canines === true; }, // 什么时候拥有这个特质
        colour : 'red' // 特质的颜色
    },
    {
        addto  : 'General Traits', // 属于哪个分类
        name   : '灵嗅', // 特质名称
        text   : '你嗅觉灵敏，+4%诡术。', // 特质描述
        cond   : function () { return V.sensitiveolfactory === true; }, // 什么时候拥有这个特质
        colour : 'teal' // 特质的颜色
    },
    {
        addto  : 'General Traits', // 属于哪个分类
        name   : '矫健的肌肉', // 特质名称
        text   : '你威武雄壮，+5%体能。', // 特质描述
        cond   : function () { return V.athleticmuscles === true; }, // 什么时候拥有这个特质
        colour : 'orange' // 特质的颜色
    },
    {
        addto  : 'General Traits', // 属于哪个分类
        name   : '结实的身体', // 特质名称
        text   : '你洋溢着朝气，+5%运动。', // 特质描述
        cond   : function () { return V.sturdybody === true; }, // 什么时候拥有这个特质
        colour : 'green' // 特质的颜色
    },
    {
        addto  : 'General Traits', // 属于哪个分类
        name   : '翼手', // 特质名称
        text   : '可以在某些地方进行飞行，+7%手部能力。', // 特质描述
        cond   : function () { return V.sturdybody === true; }, // 什么时候拥有这个特质
        colour : 'grey' // 特质的颜色
    },
    {
        addto  : 'General Traits', // 属于哪个分类
        name   : '嗜血', // 特质名称
        text   : '遭遇战中会反抗时会减少一定疼痛。', // 特质描述
        cond   : function () { return V.sturdybody === true; }, // 什么时候拥有这个特质
        colour : 'red' // 特质的颜色
    },
    {
        addto  : 'General Traits', // 属于哪个分类
        name   : '蝙蝠<<girl>>', // 特质名称
        text   : '更喜欢晚上的时间，在晚上时你会感觉到愉悦并减少压力的增加，在白天时你会烦躁并增加压力。', // 特质描述
        cond   : function () { return V.sturdybody === true; }, // 什么时候拥有这个特质
        colour : 'red' // 特质的颜色
    },
    {
        addto  : 'General Traits', // 属于哪个分类
        name   : '沐光', // 特质名称
        text   : '你美若天仙，+10%容貌。', // 特质描述
        cond   : function () { return V.showersunlight === true && V.springglow !== true; }, // 什么时候拥有这个特质
        colour : 'green' // 特质的颜色
    },
    {
        addto  : 'General Traits', // 属于哪个分类
        name   : '纯净羽翼', // 特质名称
        text   : '在白天时随时间减少自身性奋。', // 特质描述
        cond   : function () { return V.purewings === true && V.worldwings !== true; }, // 什么时候拥有这个特质
        colour : 'gold' // 特质的颜色
    },
    {
        addto  : 'General Traits', // 属于哪个分类
        name   : '残破羽翼', // 特质名称
        text   : '在夜晚时随时间减少自身压力。', // 特质描述
        cond   : function () { return V.brokenwings === true && V.darkfeathers !== true; }, // 什么时候拥有这个特质
        colour : 'black' // 特质的颜色
    },
    {
        addto  : 'General Traits', // 属于哪个分类
        name   : '恶魔之翼', // 特质名称
        text   : '在一天中随时间增加自身性奋。', // 特质描述
        cond   : function () { return V.devilWings === true; }, // 什么时候拥有这个特质
        colour : 'purple' // 特质的颜色
    },
    {
        addto  : 'General Traits', // 属于哪个分类
        name   : '蚀日', // 特质名称
        text   : '无妄灾疾。每次遭遇解锁一次"仇决"行动，同时对双方造成巨量的伤害，减少自身性奋和创伤。', // 特质描述
        cond   : function () { return V.eclipse === true; }, // 什么时候拥有这个特质
        colour : 'red' // 特质的颜色
    },
    {
        addto  : 'General Traits', // 属于哪个分类
        name   : '破碎冠冕', // 特质名称
        text   : '你回忆起过往璀璨的圣光，解锁"绝望"行动，使用次数基于你的堕天使化程度。这可以对一个非自然事物造成额外伤害，且在到达最大意志时，其强度会大大增加。', // 特质描述
        cond   : function () { return V.shatteredcrown === true; }, // 什么时候拥有这个特质
        colour : 'black' // 特质的颜色
    }
);

setup.ModTraitTitle.push({
    title: "Hidden Traits", // 确保 title 名称一致
    display: "传说特质",
    traits: [
        {
            addto  : 'Hidden Traits', // 属于哪个分类
            name   : '慈母辉光', // 特质名称
            text   : '在白天时宽恕行动消除所有压力，且+10%护理、+15%容貌。', // 特质描述
            cond   : function () { return V.springglow === true && V.showersunlight === true; }, // 什么时候拥有这个特质
            colour : 'gold' // 特质的颜色
        },
        {
            addto  : 'Hidden Traits', // 属于哪个分类
            name   : '耀世羽翼', // 特质名称
            text   : '在白天时，随时间减少自身性奋和创伤。使你能从高处滑翔，并在顺风处飞行。', // 特质描述
            cond   : function () { return V.worldwings === true && V.purewings === true; }, // 什么时候拥有这个特质
            colour : 'gold' // 特质的颜色
        },
        {
            addto  : 'Hidden Traits', // 属于哪个分类
            name   : '终焉启示', // 特质名称
            text   : '解锁"静域"行动，能够进行时间停止，且减少恐惧值的增加。', // 特质描述
            cond   : function () { return V.artemis === true; }, // 什么时候拥有这个特质
            colour : 'red' // 特质的颜色
        },
        {
            addto  : 'Hidden Traits', // 属于哪个分类
            name   : '漆黑羽翼', // 特质名称
            text   : '在夜晚时随时间减少自身压力和疲劳，同时所收到的压力和疼痛减少了。', // 特质描述
            cond   : function () { return V.darkfeathers === true && V.brokenwings === true; }, // 什么时候拥有这个特质
            colour : 'black' // 特质的颜色
        },
        {
            addto  : 'Hidden Traits', // 属于哪个分类
            name   : '魔鬼鞭', // 特质名称
            text   : '每次射精时，增加性奋并恢复一定的精液储量。', // 特质描述
            cond   : function () { return V.artemis === true; }, // 什么时候拥有这个特质
            colour : 'pink' // 特质的颜色
        },
        {
            addto  : 'Hidden Traits', // 属于哪个分类
            name   : '幽冥蝠翼', // 特质名称
            text   : '随时间增加性奋和麻醉，同时可以在某些地方飞行并+15%手部技能。', // 特质描述
            cond   : function () { return V.artemis === true; }, // 什么时候拥有这个特质
            colour : 'purple' // 特质的颜色
        },
        {
            addto  : 'Hidden Traits',
            name   : '阿尔忒弥斯之誓', // 特质名称
            text   : '你的动物转化进度都不再衰减。', // 特质描述
            cond   : function () { return V.artemis === true; }, // 什么时候拥有这个特质
            colour : 'gold' // 特质的颜色
        }
    ]
});
