#### 1) What is the difference between var, let, and const?

        var: function-scoped type. Block এর ভিতর থাকলেও বাইরে access করা যায়। declare না করেও access করলে undefined দেখায়।
        let : Block-scoped → শুধু {} এর ভিতর কাজ করে। আগে access করলে error দেয়। মান পরিবর্তন করা যায়, কিন্তু একই scope এ redeclare করা যায় না।
        const : Block-scoped এবং value fixed. মান change করা যায় না। Object বা Array হলে ভিতরের content change করা যায়।

#### 2) What is the difference between map(), forEach(), and filter()?

        map(): array-এর element নিয়ে নতুন array বানিয়ে দেয়। মূল array অপরিবর্তিত থাকে।
        forEach(): forEach () হচ্ছে array একটি object, array-এর সব element এর উপর কাজ করার জন্য ব্যবহার করা হয়। কিন্তু কোনো রেজাল্ট রিটার্ন করেনা।

        filter(): array থেকে শর্ত অনুযায়ী element বাছাই করা এবং রেজাল্ট রিটার্ন করে ।

#### 3) What are arrow functions in ES6?

        Arrow functions হলো JavaScript-এর সংক্ষিপ্ত ফাংশন লেখা পদ্ধতি। anonymous (নাম ছাড়া) হয়, কিন্তু variable-এ assign করা যায়।

#### 4) How does destructuring assignment work in ES6?

        Destructuring দিয়ে আমরা array বা object-এর value সরাসরি variable-এ নিয়ে আসতে পারি। এটি কোড ছোট এবং পরিষ্কার করে।

#### 5) Explain template literals in ES6. How are they different from string concatenation?

        ES6 এ একটি নতুন ফিচার। String তৈরি করার জন্য নতুন syntax। Backticks ` দিয়ে লেখা হয়। এর মাধ্যমে আমরা variable dynamic ভাবে লিখতে পারি ${variable} দিয়ে। Multi-line strings সহজে লিখতে পারি।
