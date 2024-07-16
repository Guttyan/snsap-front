<template>
    <div class="register">
        <label>名前： <input v-model="name" type="text" required /></label>
        <br />
        <label>メールアドレス： <input v-model="email" type="email" required /></label>
        <br />
        <label>パスワード： <input v-model="password" type="password" required /></label>
        <br />
        <button @click="register">新規登録</button>
        <br />
        <NuxtLink to="/">戻る</NuxtLink>
    </div>
</template>

<script>
import firebase from "~/plugins/firebase";

export default {
    data() {
        return {
            name: null,
            email: null,
            password: null,
        };
    },
    methods: {
        register() {
            if (!this.name || !this.email || !this.password) {
                alert("名前、メールアドレスまたはパスワードが入力されていません。");
                return;
            }
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then((data) => {
                    // ユーザー登録が成功した場合の処理
                    // ここでユーザー情報を保存するなどの処理が可能
                    this.$router.replace("/"); // 登録後にホームページへリダイレクト
                })
                .catch((error) => {
                    switch (error.code) {
                        case "auth/invalid-email":
                            alert("メールアドレスの形式が違います。");
                            break;
                        case "auth/email-already-in-use":
                            alert("このメールアドレスはすでに使われています。");
                            break;
                        case "auth/weak-password":
                            alert("パスワードは6文字以上で入力してください。");
                            break;
                        default:
                            alert("エラーが起きました。しばらくしてから再度お試しください。");
                            break;
                    }
                });
        },
    },
};
</script>