<template>
    <div class="login">
        <h1>Login</h1>
        <div class="container">
            <div class="row">
                <div class="col-sm-2 col-md-3 col-lg-4"></div>
                <div class="col-sm-8 col-md-6 col-lg-4">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                            </div>
                        <button type="submit" class="btn btn-primary mt-5">Submit</button>
                    </form>
                </div>
                <div class="col-sm-2 col-md-3 col-lg-4"></div>
            </div>
        </div>

        <router-link to="/register">Register</router-link>
    </div>
</template>
