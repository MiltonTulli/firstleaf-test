import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Refresh from '@material-ui/icons/Refresh';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './SearchInput.styles';

interface SearchInputProps {
  handleSearch: (value: string) => void;
  filter?: boolean;
}

export function SearchInput({ handleSearch, filter = false }: SearchInputProps) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const handleRefresh = () => {
    setValue('');
    handleSearch('');
  };
  return (
    <Paper component="div" className={classes.root}>
      <InputBase
        data-testid="input"
        className={classes.input}
        placeholder="Search Country"
        inputProps={{ 'aria-label': 'search country' }}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      {value && (
        <IconButton
          onClick={() => setValue('')}
          className={classes.iconButton}
          aria-label="Clear Text"
        >
          <CloseIcon />
        </IconButton>
      )}
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        data-testid="search"
        onClick={() => handleSearch(value)}
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      {filter && (
        <IconButton onClick={handleRefresh} className={classes.iconButton} aria-label="refresh">
          <Refresh />
        </IconButton>
      )}
    </Paper>
  );
}
