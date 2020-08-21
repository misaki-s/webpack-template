module.exports = {
    // ���C���ƂȂ�JavaScript�t�@�C���i�G���g���[�|�C���g�j
    entry: `./src/index.js`,
    // ���[�h�l�� production �ɐݒ肷��ƍœK�����ꂽ��ԂŁA
    // development �ɐݒ肷��ƃ\�[�X�}�b�v�L����JS�t�@�C�����o�͂����
    mode: "development",
    // ���[�J���J���p���𗧂��グ��
    // ���s���Ƀu���E�U�������I�� localhost ���J��
    devServer: {
        contentBase: "dist",
        open: true
    },
    // �t�@�C���̏o�͐ݒ�
    output: {
        //  �o�̓t�@�C���̃f�B���N�g����
        path: `${__dirname}/dist`,
        // �o�̓t�@�C����
        filename: "test.js"
    }
};