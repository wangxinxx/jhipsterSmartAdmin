package com.huibozhixin.jhipstersmartadmin.repository;

import com.huibozhixin.jhipstersmartadmin.domain.UserAnswer;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the UserAnswer entity.
 */
@SuppressWarnings("unused")
@Repository
public interface UserAnswerRepository extends JpaRepository<UserAnswer, Long> {

}
