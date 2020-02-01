import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Tooltip from '@material-ui/core/Tooltip';

const styles = makeStyles({
  charBtn: {
    fontSize: 18,
    fontWeight: 600,
    margin: 2
  },
  keywordContainer: {
    margin: '10px 0'
  }
});

function SearchList(props) {
  const classes = styles();
  const [keyword, setKeyword] = useState('');

  const handleChange = e => {
    e.preventDefault();
    const key = e.target.value || '';
    setKeyword(key);
    searchCharacter(key);
  }

  const searchCharacter = key => {
    props.onSearch(props.mainList.filter(o => o.label.includes(key)));
  }

  return (
    <>
      <div className={classes.keywordContainer}>
        <Grid
          container
          spacing={1}
          alignItems="flex-end">
          <Grid item>
            <SearchIcon />
          </Grid>
          <Grid item>
            <TextField
              label={props.textLabel}
              value={keyword}
              onChange={handleChange} />
          </Grid>
        </Grid>
      </div>
      <div>
        {props.list.length === 0 ?
          (<p>No results</p>) :
          (props.list.map((item, idx) => (
            <Tooltip
              title={item.label}
              key={`item-${idx}`}>
              <Button
                className={classes.charBtn}
                variant="outlined"
                color="secondary"
                onClick={() => props.handleClick(item)}>
                {item.character}
              </Button>
            </Tooltip>
          )))}
      </div>
    </>
  );
}

export default SearchList;