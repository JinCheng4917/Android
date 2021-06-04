package android.api.service;

import android.api.entity.Orders;
import com.sun.istack.NotNull;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface OrderService {
    /**
     * 新增订单
     * @param orders
     */
    void add(Orders orders);

    /**
     * 通过Id获取订单
     *
     * @param id 订单Id
     * @return Orders
     */
    Orders getOrderById(Long id);


    /**
     * 更新
     *
     * @param id   订单Id
     * @param orders
     * @return 新订单
     */
    Orders update(Long id, Orders orders);

    /**
     * 更新
     *
     * @param id   订单Id
     * @param orders
     * @return 新订单
     */
    Orders defaultOrder(Long id, Orders orders);


    /**
     * 更新
     *
     * @param id   订单Id
     * @return 新订单
     */
    Orders updateStatus(Long id, Integer status);

    /**
     * 更新
     *
     * @param id   订单Id
     * @param orders
     * @return 新订单
     */
    Orders complete(Long id, Orders orders);


    /**
     * 更新
     *
     * @param id   订单Id
     * @param orders
     * @return 新订单
     */
    Orders confirm(Long id, Orders orders);


    /**
     * 删除
     *
     * @param id
     */
    void delete(Long id);


    Page<Orders> findAll(Pageable pageable);

    Page<Orders> findAllById(Pageable pageable);

    Page<Orders> findAllByStatus(int status,Pageable pageable);

    Page<Orders> findAllByDriver(Pageable pageable);

}