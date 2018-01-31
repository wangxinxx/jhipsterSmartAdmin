package com.huibozhixin.jhipstersmartadmin.repository;

import com.huibozhixin.jhipstersmartadmin.domain.BaseAnswer;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the BaseAnswer entity.
 */
@SuppressWarnings("unused")
@Repository
public interface BaseAnswerRepository extends JpaRepository<BaseAnswer, Long> {

}
