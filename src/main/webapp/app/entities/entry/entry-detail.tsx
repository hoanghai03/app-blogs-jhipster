import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './entry.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const EntryDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const entryEntity = useAppSelector(state => state.entry.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="entryDetailsHeading">Entry</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{entryEntity.id}</dd>
          <dt>
            <span id="title">Title</span>
          </dt>
          <dd>{entryEntity.title}</dd>
          <dt>
            <span id="content">Content</span>
          </dt>
          <dd>{entryEntity.content}</dd>
          <dt>
            <span id="date">Date</span>
          </dt>
          <dd>{entryEntity.date ? <TextFormat value={entryEntity.date} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>Blog</dt>
          <dd>{entryEntity.blog ? entryEntity.blog.name : ''}</dd>
          <dt>Tag</dt>
          <dd>
            {entryEntity.tags
              ? entryEntity.tags.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.name}</a>
                    {entryEntity.tags && i === entryEntity.tags.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <Button tag={Link} to="/entry" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/entry/${entryEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default EntryDetail;
