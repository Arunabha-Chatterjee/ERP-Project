package com.example.backend.service;

import com.example.backend.model.DataBaseSequence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
public class SequenceService  {

    @Autowired
    MongoOperations mongoOperations;

    public long generateSequence(String seqName){
        FindAndModifyOptions options = new FindAndModifyOptions();
        options.returnNew(true);
        options.upsert(true);

        DataBaseSequence sequence = mongoOperations.findAndModify(
                new Query(Criteria.where("_id").is(seqName)),
                new Update().inc("seq",1),
                options,
                DataBaseSequence.class
        );

        return sequence!= null ? sequence.getSeq() : 1;
    }
}
