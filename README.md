Steps of Approach:
1. Followed component based approach. Created multiple sub components based on the requirement instead of writing the code in a single file. This helps is code reusability and code readability.
2. MaxWidthWrapper component helps in binding the children with default constraints. On top of that, if we want to change anything, we can do it whenever we're calling this function.
3. The main Home function and perks section were bound between the MaxWidthWrapper. A lot of other functions were bound with this MaxWidthWrapper component.
4. Navbar has been created as another component and made it sticky, so that it would stay on the top for any page.
5. NavItems were called within the Navbar seperately as they're client components which require user interactivity. This helps in keeping the Navbar a server component.
6. Used hooks(```use-on-click-outside.ts```) to get the user activity when clicked outside the specific area. Implemented this to close the expanded view when clicked outside the region.
7. Used Shadcn UI Library for styling.
8. Created a utility function ```formatPrice()``` in ```utils.ts``` for price formatting.
9. Payload CMS was used to handle the admin dashboard, where a seller could list the products.
10. ```payload.config.ts``` file has the entire setup with payload CMS. The admin dashboard was hosted on local server at ```/sell``` route. The output will be extracted to a typescript file by generating ```payload-types.ts```.
11. ```ProductFile.ts``` contains the CMS main page model where we define the list of items that are displayed on sellers dashboard like products, orders, product_files. The whole CMS collections models are defined in the folder ```collections```.
    <img width="1306" alt="image" src="https://github.com/VarshithChilamkurthi/vstore/assets/52421766/c61ef778-ed60-4171-bb85-c396cbdeec47">
12. Connected with MongoDB to store user details and products.
13. Used react-hook-form and Zod library for schema validation to validate user email and password. ```lib/validators/account-credentials-validator.js```
14. Using resend api to send verification email to validate if its a genuine user or not. A ```_verified``` property is added in the database to check if the user was verified or not.
    ![image](https://github.com/VarshithChilamkurthi/vstore/assets/52421766/1ad4c971-81dd-43a6-a0ad-3b8eef0ed0ff)
15. On successful verification, the user will be asked to sign in to the user's account. This is handled in ```VerifyEmail.tsx```.
16. The fields of new product is defined in ```Products.ts``` file. So when any seller or admin creates a new product, these fields are visible in the CMS.
17. A new seller can list the products, but it requires an approval from admin to be published in the website.
18. Implemented Stript for accepting payments. For now only the developer mode is used, but once we use it for production, we can use an actual stripe account to accept payments.
19. Added security in ```server.ts``` so that only the users who are signed in can access the checkout.
20. Users are checked if they're signed in or not in ```middleware.ts``` file.



<img width="1192" alt="image" src="https://github.com/VarshithChilamkurthi/vstore/assets/52421766/07963f2d-f6ba-40b2-829f-8812d887964d">
<img width="1192" alt="image" src="https://github.com/VarshithChilamkurthi/vstore/assets/52421766/93bc8375-c6bc-4487-8887-62ee0115be40">
<img width="1192" alt="image" src="https://github.com/VarshithChilamkurthi/vstore/assets/52421766/2bf6a353-398f-4482-b341-303d51ffd6ee">
<img width="1192" alt="image" src="https://github.com/VarshithChilamkurthi/vstore/assets/52421766/e77f7961-0367-4c86-896c-d523602bce95">
<img width="1192" alt="image" src="https://github.com/VarshithChilamkurthi/vstore/assets/52421766/586f61ec-ff04-46cb-ada0-e68cba794134">
<img width="1192" alt="image" src="https://github.com/VarshithChilamkurthi/vstore/assets/52421766/92077984-3e38-449f-8aa4-a809bfa64416">




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
