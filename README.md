# Question 1 & 2 Answer

## Question 1 (a)

According to common Git conventions for hotfixes, I would name my branch something like **`hotfix/brief-description`**, where **brief-description** gives a concise summary of what the hotfix addresses. For example, if the hotfix is for a wrong authentication token expiration bug in the login system, I might name the branch `hotfix/auth-token-expire-bug`.

## Question 1 (b)

After finalizing my work in my designated branch first I would commit the changes (if didn't), then push my branch/commits to the remote repository.

Here are the git commands I would need for this:

```bash
git add .
git commit -m "fixed early expiration of auth token"
git push origin hotfix/auth-token-expire-bug
```

After that I would create a pull request on Github to merge my branch into the main branch. Here are the steps I would follow:

- Visit the repository on GitHub.
- Navigate to the `Pull requests` tab.
- Click on the `New pull request` button.
- Select the base branch (e.g., `main`, or `production`) and compare it - with my hotfix branch `hotfix/auth-token-expire-bug`.
- Add a appropriate title and description for the PR, - explaining what the hotfix addresses and - any other relevant information.
- Assign reviewers, if applicable.
- Submit the PR.
- Wait for the code review from my team. Address any feedback or requested changes.

After the pull request is approved, I would merge the branch into the main branch.

```bash
git checkout main
git pull origin main
git merge hotfix/auth-token-expire-bug
```

If there are no conflicts, the merge will be successful. Then, I would push the changes to the remote repository:

```bash
git push origin main
```

Finally, I would delete the hotfix branch:

```bash
git push origin --delete hotfix/auth-token-expire-bug
```

<br>

> [!NOTE]
>
> I am showing the steps with git commands but in my opinion its better to use git client applications like `Sublime Merge`, `GitKraken`, `Sourcetree`, etc. for better control, visualization and understanding of the git workflow.

## Question 2

Lets consider the following dummy code snippet:

```javascript
const dummyArr = [
  {
    type: "Vegetarian",
    menuItems: [
      { id: 1, name: "Salad" },
      { id: 2, name: "Veg Burger" },
      { id: 3, name: "Pasta" },
    ],
    category: [
      {
        name: "Starters",
        menuItems: [1, 2],
      },
    ],
  },
  {
    type: "Non-Vegetarian",
    menuItems: [
      { id: 4, name: "Chicken Wings" },
      { id: 5, name: "Beef Burger" },
      { id: 6, name: "Shrimp Pasta" },
    ],
    category: [
      {
        name: "Main Course",
        menuItems: [4, 5],
      },
    ],
  },
];
```

Here, if I want to access all the menu items in each category, I will have to first map over all the items in the `dummyArr`. Then for each item I will have to access the category and map over the `menuItems` id array to get the ids, and use `find` method on `menuItems` object array and match id. If matched, return the details. We can also use `for`/`foreach` loop to iterate over the array.

Example codes

```javascript
dummyArr.map((item) => {
  console.log("Type: ", item.type);

  item.category.map((category) => {
    console.log("Category: ", category.name);

    console.log("Menu Items: ");
    category.menuItems.map((menuId) => {
      const menuItem = item.menuItems.find((item) => item.id === menuId);
      console.log("  -- ", menuItem.name);
    });
  });
});
```

Output:

```text
Type:  Vegetarian
Category:  Starters
Menu Items:
  --  Salad
  --  Veg Burger
Type:  Non-Vegetarian
Category:  Main Course
Menu Items:
  --  Chicken Wings
  --  Beef Burger
```
