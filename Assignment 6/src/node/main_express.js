const router = require("express").Router();
const client = require("../../Client/client");
module.exports = router;

router.get("/", (req, res) => {
  res.send('../index.html');
})

router.get("/api/input", (req, res) => {
    // use our client to get all of our hats from our database 
    // by creating raw sql query to be passed to query method
  client.query("select * from input", (err, data) => {
      // log any errors that you encounter
    if (err) return console.error(err);
    // map over the array of returned rows and log them into your console
    data.rows.forEach(rowObject => {
      console.log(rowObject);
    });
    // send back via http response body the data
    res.send(data.rows);
  });
  return;
});

router.get("/api/input/:inputID", (req, res) => {
    let input_id = req.body;
    // use our client to get all of our hats from our database 
    // by creating raw sql query to be passed to query method
  client.query(`select * from input where id == '${input_id}'`, (err, data) => {
      // log any errors that you encounter
    if (err) return console.error(err);
    // map over the array of returned rows and log them into your console
    data.rows.forEach(rowObject => {
      console.log(rowObject);
    });
    // send back via http response body the data
    res.send(data.rows);
  });
  return;
});

router.post("/api/input/:input&:length", (req, res) => {
    // destructure the values you will need off of your response body
  const { input, length } = req.body;

  client.query(
      // use string interpolation to create sql query to insert values into db
    `insert into input () values (
    '${input}', ${length})`, (err, data) => {
      if (err) return console.error(err);
      console.log(data);
      // once successful, use query to get all hats from hats table again
      client.query("select * from input", (err, data) => {
        data.rows.forEach(rowObject => {
          console.log(rowObject);
        });
        // send all hats back. 201 is http response code for creation successful
        res.status(201).send(data.rows);
      });
    }
  );
  return;
});

router.delete("/api/input/:inputID", (req, res) => {
    // destructure the values you will need off of your response body
  const { input_id } = req.body;

  client.query(
      // use string interpolation to create sql query to insert values into db
    `delete from input where input_id == '${input_id}'`, (err, data) => {
      if (err) return console.error(err);
      console.log(data);
      // once successful, use query to get all hats from hats table again
      client.query("select * from input", (err, data) => {
        data.rows.forEach(rowObject => {
          console.log(rowObject);
        });
        // send all hats back. 201 is http response code for creation successful
        res.status(201).send(data.rows);
      });
    }
  );
  return;
});

