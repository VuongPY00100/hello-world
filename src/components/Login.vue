<template>
    <div class="container mt-5">
        <h2 class="text-center mb-4">Login</h2>
        <form class="border p-4 shadow-sm rounded bg-light">
            <div class="mb-3">
                <label class="form-label">Username</label>
                <input type="text" class="form-control" placeholder="Enter username">
            </div>
            <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" placeholder="Enter password">
            </div>
            <div class="d-grid">
                <button type="submit" class="btn btn-primary">Đăng nhập</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "LoginPage"
};
</script>

<style scoped>
.container {
    max-width: 400px;
}
</style>
