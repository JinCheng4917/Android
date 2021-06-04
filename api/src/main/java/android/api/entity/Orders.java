package android.api.entity;

import com.mengyunzhi.core.entity.YunzhiEntity;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
public class Orders implements YunzhiEntity {

    public static final int NOT_COLLECTED = 0;
    public static final int COLLECTED = 1;
    public static final int TRANSFORM = 2;
    public static final int COMPLETE = 3;


    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;


    private String goodsName;

    @OneToOne
    private User user;

    @CreationTimestamp
    private Timestamp startTime;


    private Double freight;

    private String endTime = "";

    private Integer status;

    private String startPlace;

    private String endPlace;

    public Long getId() {
        return id;
    }


    public String getGoodsName() {
        return goodsName;
    }

    public Integer getStatus() {
        return status;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Double getFreight() {
        return freight;
    }

    public String getEndPlace() {
        return endPlace;
    }

    public String getEndTime() {
        return endTime;
    }

    public String getStartPlace() {
        return startPlace;
    }

    public Timestamp getStartTime() {
        return startTime;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setEndPlace(String endPlace) {
        this.endPlace = endPlace;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }


    public void setStartPlace(String startPlace) {
        this.startPlace = startPlace;
    }

    public void setStartTime(Timestamp startTime) {
        this.startTime = startTime;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public void setGoodsName(String goodsName) {
        this.goodsName = goodsName;
    }
}