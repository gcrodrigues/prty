export function SignIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "h78d781278dh9u8hqs89dh87123gh78dh89qdasdav3erfg5h",
        user: {
          name: "admin",
          email: "admin@teste.com",
        },
      });
    }, 2000);
  });
}
